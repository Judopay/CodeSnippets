//To create the UIConfiguration object:

import com.judopay.judokit.android.UIConfiguration

val uiConfiguration = UIConfiguration.Builder()
           .setAvsEnabled(true)
           .setShouldPaymentMethodsDisplayAmount(true)
           .setShouldPaymentMethodsVerifySecurityCode(true)
           .setShouldPaymentButtonDisplayAmount(true)
           .build()

//Call setUIConfiguration on the Judo builder

//Pass the uiConfigurationobject:

val judo = Judo.Builder(PaymentWidgetType.PAYMENT_METHODS)
    ...
        .setUIConfiguration(uiConfiguration)
        .build()
