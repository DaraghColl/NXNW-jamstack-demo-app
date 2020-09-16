// const stripe = require('stripe')(
//     'sk_test_51HRkVxKXiyesRv3Eq6hpJBaTulj7mxAruOtSnAPQReB2dluVYbR48fal0mlOj9yfdcKUfqX907olqLENSaleiv7m00Hw2kklcj'
// );

// exports.handler = async (event, context) => {
//     const YOUR_DOMAIN = 'http://localhost:8080';

//     const params = event.body;
//     console.warn('******** params obejct *******');
//     console.log(params);
//     console.warn('******** param.amount *******');
//     console.log(params.amount);

//     const charge = await stripe.charges.create({
//         currency: 'eur',
//         source: 'tok_us',
//         amount: 5000,
//         description: 'first checkout',
//     });

//     return {
//         statusCode: 200,
//         body: params,
//     };
// };

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
