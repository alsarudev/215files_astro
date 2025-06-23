// src/pages/api/stripe-session.ts
import 'dotenv/config';
import Stripe from 'stripe';

export const prerender = false;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log('CLAVEEEEEEEEEEEE', import.meta.env.STRIPE_SECRET_KEY);

const DOMAIN = process.env.PUBLIC_DOMAIN || 'http://localhost:4321';
console.log('DOMAIN', DOMAIN);
const priceMap = {
  'Proyecto Vermut': 'price_1Rd8uQQLsiYu05CPIzAs8nnK',
};

export async function POST({ request }) {
  const { product } = await request.json();

  const priceId = priceMap[product];
  if (!priceId) {
    return new Response(JSON.stringify({ error: 'Producto no encontrado.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

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
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
