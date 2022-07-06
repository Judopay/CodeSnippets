//Add the setGooglePayConfiguration method to the Judo builder

//Set the PaymentWidgetType to: 
//- GOOGLE_PAY or
//- PRE_AUTH_GOOGLE_PAY

//Start the Judo activity:

val judo = Judo.Builder(PaymentWidgetType.GOOGLE_PAY)             
    ...              
    .setGooglePayConfiguration(googlePayConfiguration)              
    .build()
    
val intent = Intent(this, JudoActivity::class.java);
intent.putExtra(Judo.JUDO_OPTIONS, judo);
startActivityForResult(intent, PAYMENT_REQUEST_CODE);
