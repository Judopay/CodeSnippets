function handleTokenPaymentButtonClick() {
    judo.invokeTokenPayment(paymentSession, tokenConfiguration)
    .then(handleSuccess)
    .catch(handleError)
}
