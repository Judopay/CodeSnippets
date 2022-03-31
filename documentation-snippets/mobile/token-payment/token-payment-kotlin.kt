//Android
//To make a token payment or preauth token payment:

//Create the api service via JudoApiServiceFactory:
val service = JudoApiServiceFactory.createApiService(this, judo)

//Call the tokenPayment or preAuthTokenPayment

//This is a TokenRequest object that requires the card token and optional security code:

service.tokenPayment(judo.toTokenRequest(cardToken, "452"))
service.preAuthTokenPayment(judo.toTokenRequest(cardToken, "452"))

//Handle the callback:

// Make a token payment API call via JudoApiService
service.tokenPayment(getJudo(judo).toTokenPayment(cardToken, "452"))
    .enqueue(object: Callback<JudoApiCallResult<Receipt>> {
        // Handle failure response
        override fun onFailure(call: Call<JudoApiCallResult<Receipt>>, t: Throwable) {
            TODO("Not yet implemented")
        }
        // Handle successful response
        override fun onResponse(
            call: Call<JudoApiCallResult<Receipt>>,
            response: Response<JudoApiCallResult<Receipt>>
        ) {
            when (val apiResult = response.body()) {
                is JudoApiCallResult.Success -> {
                    val receipt = apiResult.data
                    // Check if 3DS authentication is required
                    if (receipt != null && receipt.is3dSecureRequired) {
                        // Callback that handles 3DS response from SDK
                        val callback = object : ThreeDSOneCompletionCallback {
                            // Handle 3DS successful authentication
                            override fun onSuccess(success: JudoPaymentResult) {
                                setResult(success.code, success.toIntent())
                                finish()
                            }
                            // Handle 3DS unsuccessful authentication
                            override fun onFailure(error: JudoPaymentResult) {
                                setResult(error.code, error.toIntent())
                                finish()
                            }
                        }
                        // Fragment that handles 3DS webview logic
                        val fragment = ThreeDSOneCardVerificationDialogFragment(
                            service,
                            receipt.toCardVerificationModel(),
                            callback
                        )
                        fragment.show(
                            supportFragmentManager,
                            THREE_DS_ONE_DIALOG_FRAGMENT_TAG
                        )
                    } else {
                        // If 3DS authentication not required, handle the result
                        val result = apiResult.toJudoPaymentResult(resources)
                        setResult(result.code, result.toIntent())
                        finish()
                    }
                }
                is JudoApiCallResult.Failure -> {
                    val result = apiResult.toJudoPaymentResult(resources)
                    setResult(result.code, result.toIntent())
                    finish()
                }
            }
        }
    })
