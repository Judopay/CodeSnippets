function handlePaymentButtonClick() {
    judo.invokePayment(paymentSession, paymentConfiguration)
    .then(handleSuccess)
    .catch(handleError)
}
