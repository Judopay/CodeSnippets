<script>
function handleApplePayButtonClick() {

let applePayConfiguration = {  
amount: '{{amount}}',  
currency: '{{currency}}',  
yourConsumerReference: '{{yourConsumerReference}}',  
yourPaymentReference: '{{yourPaymentReference}}’,  
judoId: '{{judoId}}', //initiativeContext: 'web.judopay.com' // optional, default = window.location.hostname}

judo.digitalWallets
.invokePaymentWithApplePay({{paymentSession}}, configuration)
.then(response => console.log(JSON.stringify(response)))
.catch(error => console.error(error))

} 
</script>
