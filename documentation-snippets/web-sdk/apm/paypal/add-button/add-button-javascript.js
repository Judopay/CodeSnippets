judo.getPayPalButton(configuration)  
.then(button => {   
button.render('#paypal-button-container');  
}) 
.catch(error => console.error(error));
