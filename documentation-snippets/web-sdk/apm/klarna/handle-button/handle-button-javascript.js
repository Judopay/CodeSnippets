//Configure the Klarna object of the Web SDK:
klarnaButton.onclick = async () => {
       const myPaymentToken = 'my-token-here'
       const products = [
             {
                    name: 'BatteryPowerPack',
                    quantity: 1,
                    unit_price: 1000,
                    total_amount: 1001
             }
       ]
 
       const myConfiguration = {
                       judoId: "{{judoId}}",
                        currency: "GBP",
                        amount: 10,
                        country: "GB",
                        accountHolderName: "Account Holder Name",
                        merchantPaymentReference: "1",
                        merchantConsumerReference: "1",
                        taxAmount: 0.01,
                        mobileNumber: "00441895808221",
                        emailAddress: "john@doe.com",
                    apmData: {
                        firstName: "John",
                        lastName: "Doe",
                        mobileNumber: "00441895808221",
                   billingAddress: {
                        address1: "13 New Burlington St",
                        address2: "Apt 214",
                        city: "London",
                        country: "GB",
                        postcode: "W13 3BG"
        }
    },
                    paymentMethod: "Klarna"
}
 
       try {
             const result = await judopay.invokePaymentWithKlarna(myPaymentToken, myConfiguration)
             console.log(result)
       } catch (myError) {
           console.error(myError)
       }
}
