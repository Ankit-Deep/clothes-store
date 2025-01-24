import express from 'express';
import cors from 'cors';
import Razorpay from 'razorpay';
import conf from './src/conf/conf.js';

const app = express();

app.use(cors());

const razorpay = new Razorpay({
  key_id: conf.razorPayKey,
  key_secret: conf.razorPaySecret
});

app.get('/create-order', async (req, res) => {
  try {
    const amount = parseInt(req.query.amount, 10);

    if (isNaN(amount) || amount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }
    const order = await razorpay.orders.create({
      amount: amount *100 , // amount in the smallest currency unit
      currency: 'INR',
      receipt: 'order_rcptid_' + Date.now(),
      payment_capture: '1'
    });
    res.json({ amount: order.amount, id: order.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
