<script>
var configMinimum = {
    iframe: {
    language: "en",
    errorFieldId: 'judopay-errors',
    showCardTypeIcons: true,
    cardTypeIconRight: "10px",
    cardTypeIconTop: "-2px",
    backgroundColor: "#FFFFFF",
    layout: "compact",
    enabledPaymentMethods: ['CARD'],
    isCountryAndPostcodeVisible: false,
    isCardHolderNameVisible: true,
    errorsDisplay: "HIDE_UNDER_FIELDS",
    disableUnderline: false,
    }
}
</script>

//Create the iframe in a script tag:
var judo = new JudoPay("yourAPIToken", true);
var payment = judo.createCardDetails('payment-iframe',configMinimum);
