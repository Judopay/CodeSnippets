//Call the setPaymentMethods on the Judo builder
//Pass an array of PaymentMethod enum values:

val paymentMethods = arrayOf(
  PaymentMethod.CARD,
  PaymentMethod.GOOGLE_PAY,
  PaymentMethod.IDEAL
)

val judo = Judo.Builder(PaymentWidgetType.CARD_PAYMENT)
            ...
            .setPaymentMethods(paymentMethods)
            .build()
