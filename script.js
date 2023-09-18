document.addEventListener('DOMContentLoaded', function() {
    const googlePayButton = document.getElementById('googlePayButton');

    googlePayButton.addEventListener('click', onGooglePayButtonClicked);
});

function onGooglePayButtonClicked() {
    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
            {
                type: 'CARD',
                parameters: {
                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                    allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
                },
                tokenizationSpecification: {
                    type: 'PAYMENT_GATEWAY',
                    parameters: {
                        gateway: 'your_gateway_name',
                        gatewayMerchantId: 'your_merchant_id'
                    }
                }
            }
        ],
        merchantInfo: {
            merchantId: 'your_merchant_id',
            merchantName: 'Your Merchant Name'
        },
        transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPrice: '10.00',
            currencyCode: 'USD'
        }
    };

    const paymentsClient = new google.payments.api.PaymentsClient({
        environment: 'TEST' // Use 'PRODUCTION' for live transactions
    });

    paymentsClient.loadPaymentData(paymentRequest)
        .then(function(paymentData) {
            // Handle successful payment here
            console.log('Payment successful!', paymentData);
        })
        .catch(function(error) {
            // Handle errors here
            console.error('Error processing payment:', error);
        });
}
