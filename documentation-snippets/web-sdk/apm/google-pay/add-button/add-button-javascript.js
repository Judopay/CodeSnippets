const googlePayConfiguration = {
    judoId: "yourJudoId",
    amount: "12.99",
    currency: "GBP",
    yourPaymentReference: "yourPaymentReferenc",
    yourConsumerReference: "yourConsumerReference",
    paymentSession: "yourPaymentSession",
    environment: "TEST",
    transactionMode: "payment",
    buttonStyle: {
        type: "buy",
        sizeMode: "static",
        locale: "en",
        width: "200",
        height: "36"
  	} 
    paymentRequest = {
      merchantInfo: {
          merchantId: 'yourMerchantId' //issued after registration
      },
      allowedPaymentMethods: [{
          parameters: {
              allowedCardNetworks: ['VISA', 'MASTERCARD', 'AMEX']
          }
      }],
      transactionInfo: {
          totalPriceStatus: 'FINAL',
          totalPrice: '1.0',
          currencyCode: 'GBP',
          countryCode: 'GB'
      }    
}
    onSuccess: handleSuccess,
    onError: handleError
}

//Initialize Google Pay button with Google Pay Configuration object:
const button = judo.digitalWallets.getGooglePayButton(googlePayConfiguration)

//Add the Google Pay Button to your page:
const container = document.getElementById('button-container')
container.append(button)
