//To set up the Payments Widget for Android
//Change the PaymentWidgetType to either:

//PAYMENT_METHODS or, 

//PRE_AUTH_PAYMENT_METHODS

//For example:
val judo = Judo.Builder(PaymentWidgetType.PAYMENT_METHODS)
            .setApiToken("my-token")
            .setApiSecret("my-secret")
            .setIsSandboxed(true)
            .setJudoId("my-judo-id")
            .setAmount(amount)
            .setReference(reference)
            .setGooglePayConfiguration(googlePayConfiguration)
            .build()
            
//Start the Judo Activity:
val intent = Intent(this, JudoActivity::class.java);
intent.putExtra(Judo.JUDO_OPTIONS, judo);
startActivityForResult(intent, PAYMENT_REQUEST_CODE);
