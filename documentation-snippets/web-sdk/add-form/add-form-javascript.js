<script>
var configMinimum = {
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
</script>

//Create the iframe in a script tag:
var judo = new JudoPay("yourAPIToken", true);
var payment = judo.createCardDetails('payment-iframe',configMinimum);
