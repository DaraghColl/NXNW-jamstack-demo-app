const sgMail = require('@sendgrid/mail');
const template_id = process.env.SEND_GRID_TEMPLATE;
const sendGridAPIKey = process.env.SEND_GRID_API;

sgMail.setApiKey(sendGridAPIKey);

exports.handler = function (event, context, callback) {
    const {
        message,
        email,
        name
    } = JSON.parse(event.body);

    const msg = {
        to: process.env.SEND_GRID_T0_EMAIL,
        from: email,
        subject: 'New Jamestack Message',
        text: `${message} \n from ${name}, ${email}`,
        html: `${message} \n from ${name}, ${email}`,
    };

    sgMail
        .send(msg)
        .then(res => {
            return callback(null, {
                statusCode: 200,
                body: JSON.stringify({
                    msg: 'success'
                }),
            });
        })
        .catch(err => {
            return callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    msg: 'error.'
                }),
            });
        });
};