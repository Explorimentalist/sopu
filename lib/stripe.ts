import Stripe from 'stripe'

// Add debug logging at initialization
console.log('Initializing Stripe with key:', {
  exists: !!process.env.STRIPE_SECRET_KEY,
  prefix: process.env.STRIPE_SECRET_KEY?.substring(0, 7)
})

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is missing')
}

// Initialize Stripe with the secret key
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
  typescript: true,
})

export interface CreateCheckoutSessionParams {
  lineItems: Stripe.Checkout.SessionCreateParams.LineItem[]
  currency: string
  successUrl: string
  cancelUrl: string
}

export async function createCheckoutSession(params: CreateCheckoutSessionParams) {
  return stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: params.lineItems,
    mode: 'payment',
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    shipping_address_collection: {
      allowed_countries: ['ES', 'GB'], // Spain and UK
    },
    billing_address_collection: 'required',
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 500, // €5.00 or £5.00
            currency: params.currency,
          },
          display_name: 'Standard Shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
    ],
    customer_creation: 'always',
    phone_number_collection: {
      enabled: true,
    },
    metadata: {
      order_id: `order_${Date.now()}`,
    },
  })
} 