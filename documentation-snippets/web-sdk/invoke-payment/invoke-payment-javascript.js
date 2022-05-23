const judopay = new JudoPay()
   // Invoke payment method:
        judopay
        .invokePayment(paymentSession, configuration)
        .then(handleSuccess)
        .catch(handleError)
