 function handlePaymentButtonClick() {
    const paymentMethod = judo.getPaymentMethod()
    
    if(paymentMethod === 'CARD') {
          judo.invokePayment(paymentSession, paymentConfiguration)
          .then(handleSuccess)
          .catch(handleError)
    }
    else if(paymentMethod === 'IDEAL') {
          judo.invokePaymentWithIDEAL(paymentSession, idealConfiguration)
          .then(handleSuccess)
          .catch(handleError)
    }
}
