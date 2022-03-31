//Android Make a trn

//Create an Intent to pass the JudoActivity class
//Add the Judo object to the Intent:
//Call putExtra
//Assign it to the JUDO_OPTIONS key

//Pass the Intent and a request code to allow Judopay to handle the onActivityResult and the transaction response:

val intent = Intent(this, JudoActivity::class.java);
intent.putExtra(Judo.JUDO_OPTIONS, judo);
startActivityForResult(intent, PAYMENT_REQUEST_CODE);
 

//Implement the onActivityResult method and handle the transaction response:

override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    super.onActivityResult(requestCode, resultCode, data)

    if (requestCode == PAYMENT_REQUEST_CODE) {
        when (resultCode) {

            PAYMENT_CANCELLED -> toast("User cancelled the payment.")

            PAYMENT_SUCCESS -> {
                val receipt = data?.getParcelableExtra<Receipt>(JUDO_RECEIPT)
                // Handle response
            }

            PAYMENT_ERROR -> {
                val error = data?.getParcelableExtra<JudoError>(JUDO_ERROR)
                // Handle error
            }
        }
    }
}
