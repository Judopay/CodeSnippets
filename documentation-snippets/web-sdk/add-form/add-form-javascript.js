//Script to create a minimum iframe:
<script>
const iFrameConfiguration = {
    isGeoLocationGatheringAllowed: true, 
    iFrame: {
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
