<body>

  <div id="#paypal-button-container" ></div>
  
<script>
  
  const payPalConfiguration = {
      style: {color: 'blue', height: 34},
      merchantId: 'yourPaypalMerchantId',
      amount: '1.01',
      currency: 'GBP',
      merchantPaymentReference: 'yourPaymentReference',
      judoId: 'yourJudoId',
      dynamicDescriptor: 'dynamicDescriptor',
      paymentSession: 'yourPaymentSession',
      consumer: {
          merchantConsumerReference: 'yourConsumerReference',
          firstName: 'John',
          surname: 'Doe',
          emailAddress: 'example@domain.com'
      },
      billingAddress: {
          address1: 'My House',
          address2: 'My Street',
          address3: '',
          town: 'My Town',
          city: 'My City',
          country: 'GB',
          postcode: 'TR14 8PA',
      },
      shippingAddress: {
          address1: 'My House',
          address2: 'My Street',
          address3: '',
          town: 'My Town',
          city: 'My City',
          country: 'GB',
          postcode: 'TR14 8PA',
      },
      onSuccess: handleSuccess,
      onError: handleError
  }
  
  judo.getPayPalButton(payPalConfiguration) 
      .then(button => {
          button.render(document.getElementById("#paypal-button-container"));    
          })
      .catch(error => handleError(error))
      
</script>
</body>
