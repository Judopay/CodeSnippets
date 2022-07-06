//Add the intent-filter to the AndroidManifest.xml file to register the deep link URL:
<activity
  android:name=".MainActivity"
  android:launchMode="singleTask">
  <intent-filter>
    <action android:name="android.intent.action.VIEW" />

    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

        <data
           android:scheme="your"
           android:host="scheme" />
  </intent-filter>
</activity>

//Create the Judo  object:
//Set PaymentWidgetType to:
//PAY_BY_BANK_APP, or
//PAYMENT_METHODS
//Set currency: GBP

  //Create the PBBAConfiguration object
//Set deepLinkScheme to the defined scheme in the AndroidManifest.xml file:
val pbbaConfiguration = PBBAConfiguration.Builder()
        .setDeepLinkScheme("your://scheme")
        .build()
Judo.Builder(PaymentWidgetType.PAY_BY_BANK_APP)
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
            
//Override the onNewIntent method to catch the deeplink URL
//Add the deepLinkURL to the PBBAConfiguration object
//Start JudoActivity with the desired payment widget type
//Add the same logic in onCreate:
override fun onNewIntent(intent: Intent?) {
        checkForDeepLink(intent)
        super.onNewIntent(intent)
    }
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        ...
        checkForDeepLink()
        ...
    }
    
    private fun checkForDeepLink(intent: Intent? = this.intent) {
        val uri = intent?.data
        val newIntent = Intent(this, JudoActivity::class.java)
        if (uri.contains("your://scheme")) {  
            val newPbbaConfig = pbbaConfiguration.newBuilder()
                .setDeepLinkURL(uri)
                .build()
            val judo = getJudo(PaymentWidgetType.PAY_BY_BANK_APP).newBuilder()
                .setPBBAConfiguration(newPbbaConfig)
                .build()
            newIntent.putExtra(JUDO_OPTIONS, judo)
            startActivityForResult(newIntent, JUDO_PAYMENT_WIDGET_REQUEST_CODE)
        }
    }
    
    private fun getJudo(widgetType: PaymentWidgetType): Judo {
        return Judo.Builder(widgetType)
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
            
  //To catch the first response, create a broadcastReceiver:
  private val broadcastReceiver = object : BroadcastReceiver() {
    override fun onReceive(context: Context?, intent: Intent?) {
    val result = intent?.getParcelableExtra<JudoResult>(PBBA_RESULT)
        // Handle result
    }
}

//Register the defined receiver in onCreate:
LocalBroadcastManager.getInstance(this).registerReceiver(
    orderIdReceiver,
    IntentFilter(BR_PBBA_RESULT)
)

//Catch the result in the onActivityResult method:
override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
   super.onActivityResult(requestCode, resultCode, data)

     if (requestCode == JUDO_PAYMENT_WIDGET_REQUEST_CODE) {
       when (resultCode) {
         PAYMENT_SUCCESS -> {
         val result = data?.getParcelableExtra<JudoResult>(JUDO_RESULT)
             //Process successful payment
              }
         PAYMENT_CANCELLED -> {
         val result = data?.getParcelableExtra<JudoResult>(JUDO_RESULT)
            //Process cancelled payment
              } 
         PAYMENT_ERROR -> {
         val error = data?.getParcelableExtra<JudoError>(JUDO_ERROR)
            //Process unsuccessful payment
              }    
          }
      }
}
