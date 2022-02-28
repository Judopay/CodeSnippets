var button = judo.digitalWallets.getApplePayButton({
height: 38, 
width: 240, 
language: 'EN', 
style: 'black', 
type: 'buy'});

button.onclick = handleApplePayButtonClick

document.getElementById('apple-pay-button-container').appendChild(button)
