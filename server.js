const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Define a route to receive payment token from Google Pay
app.post('/process-payment', (req, res) => {
    const paymentToken = req.body.paymentToken;

    // Use the payment token to process the payment on your server
    // Implement your payment processing logic here

    res.send({ success: true }); // Send a response back to the client
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
