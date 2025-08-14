import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
});

export async function POST(req: NextRequest) {
  try {
    const { amount, frequency } = await req.json();

    // Validate input
    if (!amount || amount < 100) { // Stripe minimum is $1.00 (100 cents)
      return NextResponse.json(
        { error: 'Invalid amount' },
        { status: 400 }
      );
    }

    let sessionConfig: Stripe.Checkout.SessionCreateParams;

    if (frequency === 'once') {
      // One-time donation (mode -> payment)
      sessionConfig = {
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'One-Time Donation',
                description: 'Thank you for your generous support!',
                // Optional: Add your organization's logo
                // images: ['https://your-site.com/logo.png'],
              },
              unit_amount: amount, // Amount in cents
            },
            quantity: 1,
          },
        ],
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate`,
        // Optional: Collect donor information
        billing_address_collection: 'required',
        // Optional: Allow donors to adjust amount at checkout
        // submit_type: 'donate',
        // Optional: Custom fields for additional info
        custom_fields: [
          {
            key: 'comment',
            label: {
              type: 'custom',
              custom: 'Leave a message (optional)',
            },
            type: 'text',
            optional: true,
          },
        ],
        // Optional: Metadata for your records
        metadata: {
          type: 'donation',
          frequency: 'once',
        },
      };
    } else {
      // Recurring donation (mode -> subscription)
      const interval = frequency === 'monthly' ? 'month' : 'year';
      
      sessionConfig = {
        mode: 'subscription',
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: `${frequency === 'monthly' ? 'Monthly' : 'Annual'} Donation`,
                description: `Thank you for your ongoing support! You can cancel anytime.`,
                // Optional: Add your organization's logo
                // images: ['https://your-site.com/logo.png'],
              },
              unit_amount: amount, // Amount in cents
              recurring: {
                interval: interval,
                interval_count: 1,
              },
            },
            quantity: 1,
          },
        ],
        success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donation-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/donate`,
        // Optional: Collect donor information
        billing_address_collection: 'required',
        // Optional: Allow donors to manage subscription
        subscription_data: {
          metadata: {
            type: 'recurring_donation',
            frequency: frequency,
          },
        },
        // Optional: Custom fields
        custom_fields: [
          {
            key: 'comment',
            label: {
              type: 'custom',
              custom: 'Leave a message (optional)',
            },
            type: 'text',
            optional: true,
          },
        ],
        metadata: {
          type: 'donation',
          frequency: frequency,
        },
      };
    }

    // Create the checkout session
    const session = await stripe.checkout.sessions.create(sessionConfig);

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error('Stripe error:', error);
    
    if (error instanceof Stripe.errors.StripeError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode || 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}