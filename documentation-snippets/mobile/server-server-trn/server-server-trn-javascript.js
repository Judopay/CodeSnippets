//React Native
//Set the JudoTransactionMode to ServerToServer when calling the Judo methods:

judo.invokePaymentMethodScreen(JudoTransactionMode.ServerToServer, configuration)
  .then((response) => {/* Handle response */})
  .catch((error) => {/* Handle error */})
