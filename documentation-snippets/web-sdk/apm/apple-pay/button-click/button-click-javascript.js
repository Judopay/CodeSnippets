<script>
function handleApplePayButtonClick() {

let applePayConfiguration = {  
amount: '{{amount}}',  
currency: '{{currency}}',  
yourConsumerReference: '{{yourConsumerReference}}',  
yourPaymentReference: '{{yourPaymentReference}}’,  
judoId: '{{judoId}}', 
initiativeContext: '{{yourDomainName}}'
}

judo.digitalWallets
.invokePaymentWithApplePay({{paymentSession}}, configuration)
.then(response => console.log(JSON.stringify(response)))
.catch(error => console.error(error))

} 
</script>
