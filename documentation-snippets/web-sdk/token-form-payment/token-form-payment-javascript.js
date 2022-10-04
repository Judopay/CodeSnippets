<html>
<head>
    <!-- Include JudoPay WebSDK -->
    <script src="https://web.judopay.com/js/0.0.31/judopay.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>

<!-- Where the Judopay iFrame will be loaded, but form is hidden for this example -->
<div id="payment-iframe" style="position:absolute;width:0;height:0;border:0;"></div>

<!-- Payment button for submitting token payment -->
<button id="submit-token-payment-button" onclick="handleTokenPaymentButtonClick()"> Pay Now </button>

<!-- Where the payment form errors will be shown -->
<div class="judopay-errors" style="color:red"></div>

<script>

    // Initializing/creating an instance of the Judopay webSDK
    var judo = new JudoPay("yourAPIToken", true);

    // Creating iFrame, but not including iFrame config parameter as form is hidden for this example
    var payment = judo.createCardDetails("payment-iframe");

    //Define config object for token payment/preauth
    const tokenConfiguration = {
        judoId: "yourJudoId",
        amount: 1.01,
        currency: "GBP",
        phoneCountryCode: "44",
        challengeRequestIndicator: "challengeAsMandate",
        scaExemption: "SecureCorporate",
        initialRecurringPayment: "false",
        yourConsumerReference: "yourConsumerReference",
        yourPaymentReference: "yourPaymentReference",
        billingAddress: {
            address1: "My house",
            address2: "My street",
            town: "My town",
            postcode: "TR14 8PA",
            country: 826
        },
        mobileNumber: "07999999999",
        emailAddress: "contact@judopay.com",

        //Token specific parameters
        cardHolderName: "CardHolder Name",
        cardToken: "yourCardToken",
        shouldVerifySecurityCode: true
    }

    function handleSuccess(response) {
        //Redirect to success page and handle response
    }
    function handleError(error) {
        //Redirect to error page and handle error
    }

    //Called when token payment button pressed to invoke payment
    function handleTokenPaymentButtonClick() {
        judo.invokeTokenPayment("yourPaymentSession", tokenConfiguration)
            .then(handleSuccess)
            .catch(handleError)
    }
</script>

</body>
</html>
