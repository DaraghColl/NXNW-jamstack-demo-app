const stripe = require('stripe')(
  'sk_test_51HRkVxKXiyesRv3Eq6hpJBaTulj7mxAruOtSnAPQReB2dluVYbR48fal0mlOj9yfdcKUfqX907olqLENSaleiv7m00Hw2kklcj'
);

exports.handler = async (event, context) => {
  const data = JSON.parse(event.body);

  const charge = await stripe.charges.create({
    currency: 'eur',
    source: 'tok_us',
    amount: data.amount,
    description: 'first checkout',
  });

  return {
    statusCode: 200,
    body: 'hello',
  };
};