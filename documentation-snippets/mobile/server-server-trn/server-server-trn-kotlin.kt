//Android
//On the Judo builder set the PaymentWidgetType to:

val judo = Judo.Builder(PaymentWidgetType.SERVER_TO_SERVER_PAYMENT_METHODS)
     .setApiToken("my-token")
     .setApiSecret("my-secret")
     .setIsSandboxed(true)
     .setJudoId("my-judo-id")
     .setAmount(amount)
     .setReference(reference)
            .build()
