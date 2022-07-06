//To add iDEAL support to your Payments Widget, set:
//The currency code to EUR (Euro)
//The JudoId

//The judoId parameter can be set by calling setJudoId on the Judo builder.

//An example of a valid iDEAL configuration:
val judo = Judo.Builder(PaymentWidgetType.PAYMENT_METHODS)         
       ...            
    .setJudoId("my-judo-id")           
    .setCurrency("EUR")           
    .build()
