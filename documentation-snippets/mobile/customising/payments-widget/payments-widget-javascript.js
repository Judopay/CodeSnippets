//React Native
//Set up the JudoConfiguration instance:


const configuration: JudoConfiguration = {
...
    paymentMethods: JudoPaymentMethods.All,
        applePayConfiguration: applePayConfiguration,
        googlePayConfiguration: googlePayConfiguration,
...
}
    judo.invokePaymentMethodScreen(JudoTransactionMode.Payment, configuration)
        .then((response) => {/* Handle response */})
        .catch((error) => {/* Handle error */})
