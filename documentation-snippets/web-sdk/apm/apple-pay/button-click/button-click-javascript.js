<script>
function handleApplePayButtonClick() {

 let applePayConfiguration = {  
      amount: '{{amount}}',  
      currency: '{{currency}}',  
      yourConsumerReference: '{{yourConsumerReference}}',  
      yourPaymentReference: '{{yourPaymentReference}}',  
      judoId: '{{judoId}}', 
      initiativeContext: '{{yourDomainName}}'
 }

 judo.digitalWallets.invokePaymentWithApplePay({{paymentSession}}, configuration)
      .then(handleSuccess)
      .catch(handleError)
} 
</script>
