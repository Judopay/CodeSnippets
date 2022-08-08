const judopay = new JudoPay()
   // Invoke payment method:
        judopay
        .invokePayment(paymentSession, paymentConfiguration)
        .then(handleSuccess)
        .catch(handleError)
