//Configuration example:
export interface GetGooglePayButtonProps {
    {
    judoId: 'yourJudoId',
    yourPaymentReference: 'yourPaymentReference',
    yourConsumerReference: 'yourConsumerReference',
    paymentSession: 'yourPaymentSession',
    amount: '12.99',
    currency: 'GBP',
    transactionMode: 'payment'
	environment: 'TEST',
    buttonStyle: {
        type: "buy",
        color: "default", 
        sizeMode: "static",
        locale: 'en',
        width: '200',
        height: '36'
  		} 
  
  	}
   
}
            
