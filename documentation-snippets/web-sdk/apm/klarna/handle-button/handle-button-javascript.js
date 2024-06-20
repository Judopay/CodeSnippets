<script>

klarnaButton.onclick = handleKlarnaButtonClick

function handleKlarnaButtonClick() {

    const klarnaConfiguration = {
        judoId: "yourJudoId",
        currency: "GBP",
        amount: 10,
        country: "GB",
        accountHolderName: "Account Holder Name",
        merchantPaymentReference: "yourPaymentReference",
        merchantConsumerReference: "yourConsumerReference",
        taxAmount: 0.01,
        mobileNumber: "00441895808221",
        emailAddress: "john@doe.com",
        apmData: {
            firstName: "John",
            lastName: "Doe",
            mobileNumber: "00441895808221",
            billingAddress: {
                address1: "13 New Burlington St",
                address2: "Apt 214",
                town: "London",
                country: "GB",
                postcode: "W13 3BG"
            }
        },
        paymentMethod: "Klarna"
    }

    judo.invokePaymentWithKlarna('yourPaymentSession', klarnaConfiguration)
        .then(handleSuccess)
        .catch(handleError)
}

</script>
