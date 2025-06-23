// src/pages/api/stripe-session.ts
import 'dotenv/config';
import Stripe from 'stripe';

export const prerender = false;
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const DOMAIN = process.env.PUBLIC_DOMAIN || 'http://localhost:4321';

export async function POST({ request }) {
  try {
    // Validación de datos recibidos
    if (!request) {
      return new Response(JSON.stringify({ error: 'No se recibió la petición.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    let body;
    try {
      body = await request.json();
    } catch (err) {
      return new Response(JSON.stringify({ error: 'El cuerpo de la petición no es JSON válido.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const { product } = body;
    if (!product) {
      return new Response(JSON.stringify({ error: 'Falta el campo "product" en la petición.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Buscar el priceId en Stripe según el nombre del producto
    let priceId = null;
    let foundProduct;
    try {
      foundProduct = await stripe.products.retrieve(product);
    } catch (e) {
      // Si el producto no existe, Stripe lanza un error
      return new Response(JSON.stringify({ error: 'Producto no encontrado en Stripe.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Buscar el primer precio activo asociado a ese producto
    const prices = await stripe.prices.list({ product: foundProduct.id, active: true, limit: 10 });
    if (!prices.data.length) {
      return new Response(JSON.stringify({ error: 'No hay precios activos para este producto en Stripe.' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    priceId = prices.data[0].id;
    // Validación de Stripe Key
    if (!process.env.STRIPE_SECRET_KEY) {
      return new Response(JSON.stringify({ error: 'Clave secreta de Stripe no configurada.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Validación de dominio
    if (!DOMAIN) {
      return new Response(JSON.stringify({ error: 'Dominio de redirección no configurado.' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    // Crear sesión de Stripe
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{ price: priceId, quantity: 1 }],
        mode: 'payment',
        success_url: `${DOMAIN}/success`,
        cancel_url: `${DOMAIN}/cancel`,
      });
      return new Response(JSON.stringify({ id: session.id }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (stripeError) {
      return new Response(JSON.stringify({ error: 'Error al crear la sesión de pago en Stripe.', details: stripeError.message }), {
        status: 502,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error inesperado en el servidor.', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
