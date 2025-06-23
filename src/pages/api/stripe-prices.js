import 'dotenv/config';
import Stripe from 'stripe';

export const prerender = false;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const proyectosIds = JSON.parse(process.env.PUBLIC_PROYECTOS_IDS || '{}');

export async function GET() {
  try {
    const result = {};
    // Recorre todos los productos definidos en la variable de entorno
    for (const [nombre, id] of Object.entries(proyectosIds)) {
      try {
        // Busca el primer precio activo para el producto
        const prices = await stripe.prices.list({ product: id, active: true, limit: 1 });
        if (prices.data.length > 0) {
          const price = prices.data[0];
          result[id] = {
            amount: (price.unit_amount / 100).toFixed(2),
            currency: price.currency.toUpperCase(),
          };
        } else {
          result[id] = { amount: null, currency: null };
        }
      } catch (e) {
        result[id] = { amount: null, currency: null };
      }
    }
    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error al obtener los precios de Stripe', details: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 