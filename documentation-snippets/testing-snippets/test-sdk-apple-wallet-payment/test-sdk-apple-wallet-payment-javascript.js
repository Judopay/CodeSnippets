//4. called when the Apple Pay button is clicked
function handleApplePayButtonClick() {

 let applePayConfiguration = {  
      amount: 'amount',  
      currency: 'currency',  
      yourConsumerReference: 'yourConsumerReference',  
      yourPaymentReference: 'yourPaymentReference',  
      judoId: 'judoId', 
      initiativeContext: 'yourDomainName'
 }

//trigger WebSDK Apple Pay payment with Apple Pay configuration object
 judo.digitalWallets.invokePaymentWithApplePay(paymentSession, configuration)
      .then(handleSuccess) // Judopay receipt object will be returned
      .catch(handleError) // Judopay error object will be returned
} 

//1. create Apple Pay button with styling object:
var button = judo.digitalWallets.getApplePayButton({
height: 38, 
width: 240, 
language: 'EN', 
style: 'black', 
type: 'buy'});

//2. set the function to be called when the Apple Pay button is clicked
button.onclick = handleApplePayButtonClick

//3. add the Apple Pay Button to your page:
const container = document.getElementById('apple-pay-button-container')
container.append(button)
