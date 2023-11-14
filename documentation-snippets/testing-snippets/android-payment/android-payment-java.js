//Pass the Intent and a request code to allow Judopay to handle the onActivityResult and the transaction response:
  val intent = Intent(this, JudoActivity::class.java);
  intent.putExtra(JUDO_OPTIONS, judo);
  startActivityForResult(intent, JUDO_PAYMENT_WIDGET_REQUEST_CODE);

//Implement the onActivityResult method and handle the transaction response:
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)

    if (requestCode == JUDO_PAYMENT_WIDGET_REQUEST_CODE) {
        when (resultCode) {

            PAYMENT_CANCELLED -> toast("User cancelled the payment.")

            PAYMENT_SUCCESS -> {
                val result = data?.getParcelableExtra<JudoResult>(JUDO_RESULT)
                // Handle response
            }

            PAYMENT_ERROR -> {
                val error = data?.getParcelableExtra<JudoError>(JUDO_ERROR)
                // Handle error
            }
        }
    }
}
