//Android
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
