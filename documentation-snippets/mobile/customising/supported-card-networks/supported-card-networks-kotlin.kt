//Android
//Set the setSupportedCardNetworks on the Judo builder with an array of CardNetwork values.

//For the purpose of this exercise, Visa and MasterCard are selected as the supported card networks:

val networks = arrayOf(CardNetwork.VISA, CardNetwork.MASTERCARD)

val judo = Judo.Builder(PaymentWidgetType.CARD_PAYMENT)
            ...
            .setSupportedCardNetworks(networks)
            .build()
