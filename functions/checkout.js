const stripePrivateKey = process.env.STRIPE_PRK;
const stripe = require('stripe')(stripePrivateKey);

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  try {
    const charge = await stripe.charges.create({
      currency: 'eur',
      source: 'tok_us',
      amount: data.amount,
      description: 'Payment from jamstack website',
    });

    return {
      statusCode: 200,
      body: 'success'
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: 'error'
    };
  }
};