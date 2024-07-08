const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/create-checkout-session', async (req, res) => {
  res.json("hi")
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    
  });

  
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
