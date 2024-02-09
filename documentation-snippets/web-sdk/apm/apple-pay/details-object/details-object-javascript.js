const details = {
  total: {
    label: "Total",
    amount: {
      value: "4.99",
      currency: "GBP"
    }
  },
  modifiers: [
    {
      supportedMethods: "https://apple.com/apple-pay", //must be set to this
      data: {
        recurringPaymentRequest: {
            paymentDescription: "A description of the recurring payment to display to the user in the payment sheet.",
            managementURL: "https://judopay.example.com" //A URL to a web page where the user can update or delete the payment method for the recurring payment.
            regularBilling: {
                label: "Recurring",
                amount: "4.99",
                paymentTiming: "recurring" //must be set to this
            }
        }
    }
  ]
}
