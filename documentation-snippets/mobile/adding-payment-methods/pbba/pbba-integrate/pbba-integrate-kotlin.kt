//Insert the button in the layout file:

<com.judopay.judokit.android.ui.common.PayByBankButton        
android:id="@+id/payByBankButton"       
android:layout_width="wrap_content"        
android:layout_height="wrap_content" />

//Set OnClickListener to the PayByBankApp button
//The JudoActivity will start and pass the result to merchant:
payByBankButton.setOnClickListener {           
	val intent = Intent(this, JudoActivity::class.java)            
	intent.putExtra(JUDO_OPTIONS, judo)            
	startActivityForResult(intent, JUDO_PAYMENT_WIDGET_REQUEST_CODE)      
 }

//Enable the PayByBankApp in the Payment Selector Screen:
//Build the Judo configuration object:
//Set the payment widget type to:
//PaymentWidgetType.PAYMENT_METHODSGBP
//Set the currency: GBP

val amount = Amount.Builder()
            .setAmount("1")
            .setCurrency(Currency.GBP)
            .build()
            
Judo.Builder(PaymentWidgetType.PAYMENT_METHODS)
            .setJudoId(judoId)
            .setApiToken(token)
            .setApiSecret(secret)
            .setAmount(amount)
            .setReference(reference)
            .setIsSandboxed(isSandboxed)
            .setSupportedCardNetworks(networks)
            .setPaymentMethods(paymentMethods)
            .setUiConfiguration(uiConfiguration)
            .setGooglePayConfiguration(googlePayConfiguration)
            .setPBBAConfiguration(pbbaConfiguration)
            .build()

//Start JudoActivity with the JudoConfiguration object:
val intent = Intent(this, JudoActivity::class.java)           
	intent.putExtra(JUDO_OPTIONS, judo)           
	startActivityForResult(intent, JUDO_PAYMENT_WIDGET_REQUEST_CODE)
  
