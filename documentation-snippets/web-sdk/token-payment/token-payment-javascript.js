const tokenConfiguration = {
     judoId: "youJudoId",
     amount: 12.99,
     currency: "GBP",
     phoneCountryCode: "44",
     mobileNumber: "07999999999",
     emailAddress: "contact@judopay.com",
     challengeRequestIndicator: "challengeAsMandate",
     initialRecurringPayment: false,
     yourConsumerReference: "yourConsumerReference",
     yourPaymentReference: "yourPaymentReference",
     billingAddress: {
             address1: "My House",
             address2: "My Street",
             town: "My Town",
             country: "GB",
             postCode: "TR14 8PA",
             country: 826,
             state: "FL"
     },   

   // Token specific params (above are the same as the paymentConfiguration)
   cardToken: "yourCardToken", //mandatory
   shouldVerifySecurityCode: true,
   shouldVerifyCardHolderName: true
}
