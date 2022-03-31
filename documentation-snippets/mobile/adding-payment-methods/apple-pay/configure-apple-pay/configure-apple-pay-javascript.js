//To make an Apple Pay™ transaction, or to add Apple Pay™ as a payment method in the Payment Method Selection screen for Raect Native:

//Create an applePayConfiguration instance
//Example of an applePayConfiguration property:
const applePayConfiguration: JudoApplePayConfiguration = {
merchantId: 'my-merchant-id',
countryCode: 'GB',
paymentSummaryItems: [item],
    requiredBillingContactFields: JudoContactField.Name | JudoContactField.Email,
    requiredShippingContactFields: JudoContactField.All,
    shippingMethods: [delivery],
    shippingType: JudoShippingType.Delivery,
    returnedInfo: JudoReturnedInfo.All,
}
