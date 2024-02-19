import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
const Razorpay = require('razorpay');
const shortid = require('shortid');

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { taxAmt } = req.body;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  const payment_capture = 1;
  const amount = taxAmt * 100;
  const currency = 'INR';
  const options = {
    amount: amount.toString(),
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    const response = await razorpay.orders.create(options);
    return NextResponse.json(res, {
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (err) {
    return NextResponse.json(res, {
      error: err.message || 'An error occurred',
    });
  }
}
