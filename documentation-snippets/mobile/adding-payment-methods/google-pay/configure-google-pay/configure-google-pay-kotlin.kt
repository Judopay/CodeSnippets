//Android
//Set the required properties using the prerequisite imported models.

//Set some additional optional properties to customise Google Pay:

var billingAddressParams = GooglePayBillingAddressParameters(    
    format = GooglePayAddressFormat.MIN,    
    phoneNumberRequired = true
    )

var shippingAddressParams = GooglePayShippingAddressParameters(    
    phoneNumberRequired = true
    )
var googlePayConfiguration = GooglePayConfiguration.Builder()              
    .setTransactionCountryCode("GB")              
    .setEnvironment(GooglePayEnvironment.TEST)              
    .setIsEmailRequired(true)              
    .setIsBillingAddressRequired(true)              
    .setBillingAddressParameters(billingAddressParams)              
    .setIsShippingAddressRequired(true)              
    .setShippingAddressParameters(shippingAddressParams)              
.build()
