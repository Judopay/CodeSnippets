klarnaButton.onclick = async () => {
   	const myPaymentToken = 'my-token-here'
   	const products = [
         	{
                	name: 'name-here',
                	quantity: 1,
                	unit_price: 1.05,
                	total_amount: 1.05
         	}
   	]
 
   	const myConfiguration = {
        	paymentMethod: 'Klarna',
        	judoId: 'my-judo-id',
        	currency: 'my-currency-code-here',
        	amount: '1.05',
        	country: 'my-shipping-address-country',
        	accountHolderName: 'account-holder-name',
        	merchantPaymentReference: 'my-payment-reference',
        	merchantConsumerReference: 'your-consumer-reference',
        	taxAmount: '0.05',
        	mobileNumber: '0799999999',
        	emailAddress: 'email@me.com',
        	apmData: {
            	billingAddress: {
       	         address1: 'cardAddressAddress1',
                	address2: 'cardAddressAddress2',
                	city: 'cardAddressTown',
                	country: 'shippingAddressCountry',
                	postcode: 'cardAddressPostCode'
     	       },
            	firstName: 'klarnaFirstName',
            	lastName: 'klarnaLastName',
            	mobileNumber: '0799999999',
            	products: JSON.stringify(products)
        	}
	}
 
 
   	try {
         	const result = await judopay.invokePaymentWithKlarna(myPaymentToken, myConfiguration)
         	console.log(result)
   	} catch (myError) {
   		console.error(myError)
   	}
}
