//Android
//Call the setPrimaryAccountDetails on the Judo builder:

val primaryAccountDetails = PrimaryAccountDetails.Builder()
                              .setName("example-name")
                              .setAccountNumber("example-account-number")
                              .setDataOfBirth("example-date")
                              .setPostCode("example-postcode")
                              .build()

val judo = Judo.Builder(PaymentWidgetType.CARD_PAYMENT)
            ...
            .setPrimaryAccountDetails(primaryAccountDetails)
            .build()
