val judo = Judo.Builder(PaymentWidgetType.PRE_AUTH_GOOGLE_PAY)             
	...              
	.setGooglePayConfiguration(googlePayConfiguration)              
	.build()
	
val intent = Intent(this, JudoActivity::class.java);
intent.putExtra(Judo.JUDO_OPTIONS, judo);
startActivityForResult(intent, PAYMENT_REQUEST_CODE);
