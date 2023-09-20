<html>
<head>
    <!-- Include JudoPay WebSDK -->
    <script src="https://web.judopay.com/js/0.0/judopay.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
</head>
<body>

    <!-- Where the Judopay iFrame will be displayed -->
    <div id="payment-iframe" width="100%"></div>

    <!-- Payment button for submitting iFrame input -->
    <button id="submit-payment-button" onclick="handlePaymentButtonClick()"> Pay Now </button>

    <!-- Where the payment form errors will be shown -->
    <div class="judopay-errors" style="color:red"></div>

    <script>

        // Define config object for customizing style/behaviour of iFrame
        const iFrameConfiguration = {
            isGeoLocationGatheringAllowed: true,
            iframe: {
                language: "en",
                errorFieldId: 'judopay-errors',
                showCardTypeIcons: true,
                layout: "vertical",
                cardTypeIconRight: "10px",
                cardTypeIconTop: "-2px",
                backgroundColor: "#FFFFFF",
                enabledPaymentMethods: ['CARD'],
                defaultCountryCode: 'UK',
                isCountryAndPostcodeVisible: false,
                isCardHolderNameVisible: true,
                errorsDisplay: "HIDE_UNDER_FIELDS",
                disableUnderline: false,
                shouldAutofocus: true,
            }
        }

        // Initializing/creating an instance of the Judopay webSDK
        var judo = new JudoPay("yourAPIToken", true);

        // Displaying the card entry iFrame
        var payment = judo.createCardDetails("payment-iframe", iFrameConfiguration);

        //Define config object for payment/preauth
        const paymentConfiguration = {
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
                postCode: "TR14 8PA",
                country: 826
            },
            mobileNumber: "07999999999",
            emailAddress: "contact@judopay.com"
        }

        function handleSuccess(response) {
            //Redirect to success page and handle response
        }
        function handleError(error) {
            //Redirect to error page and handle error
        }

        //Called when payment button pressed to invoke payment
        function handlePaymentButtonClick() {
            judo.invokePayment("yourPaymentSession", paymentConfiguration)
                .then(handleSuccess)
                .catch(handleError)
        }
    </script>

</body>
