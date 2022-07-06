//To set up the transaction amount:
//In the Amount object provide the Amount value and Currency type:

val amount = Amount.Builder()
     .setAmount("150.50")
     .setCurrency(Currency.GBP)
     .build()
 

//To set up the transaction reference:
//In the Reference object provide the ConsumerReference string:
val reference = Reference.Builder()                 
    .setConsumerReference('my-consumer-reference')                 
    .build()

//To set up the Judo configuration:
//Set the following required parameters:
//The token and secret values, OR Create the authorisation object:
//Set the SDK to run in sandbox mode
//Set the following objects:
//- Judo ID
//- Authorisation object (if using this method)
//- Amount
//- Reference

//Create the authorisation object:
val authorization = PaymentSessionAuthorization.Builder()
       .setPaymentSession(paymentSession)
       .setApiToken(token)
       .build()

//Set the authorisation object when invoking Judo builder:
val builder = Judo.Builder(widgetType)
            .setAuthorization(authorization)
