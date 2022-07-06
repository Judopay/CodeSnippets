//Add the googlePayConfiguration property to the JudoConfiguration instance:

const configuration: JudoConfiguration = {    
    judoId: 'my-judo-id',    
    amount: amount,    
    reference: reference,    
    googlePayConfiguration: googlePayConfiguration,
}

//Invoke the GooglePay method and handle the response:

judo.invokeGooglePay(JudoTransactionMode.Payment, configuration)  
.then((response) => {/* Handle response */})
