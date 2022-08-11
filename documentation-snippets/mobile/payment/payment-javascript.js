const authorization: JudoAuthorization = {
  token: "my-token",
  secret: "my-secret",
}

const reference: JudoReference = {
  consumerReference: 'consumer-ref',
  paymentReference: 'payment-ref',
}

const amount: JudoAmount = {
  value: '0.05',
  currency: 'GBP',
}

const uiConfiguration: JudoUIConfiguration = {
  isAVSEnabled: false,
  shouldPaymentMethodsVerifySecurityCode: false,
  shouldPaymentButtonDisplayAmount: false,
  shouldPaymentMethodsDisplayAmount: false,
  shouldAskForBillingInformation: true
}

const cardAddress: JudoAddress = {
  line1: 'My house',
  line2: 'My street',
  line3: 'My area',
  town: 'My town',
  postCode: 'TR14 8PA',
  countryCode: 382,
}

const configuration: JudoConfiguration = {
  judoId: 'my-judo-id',
  reference,
  amount,
  uiConfiguration,
  cardAddress,
  paymentMethods: JudoPaymentMethod.Card,
  supportedCardNetworks: JudoCardNetwork.Visa,
  challengeRequestIndicator: ChallengeRequestIndicator.ChallengeAsMandate,
  scaExemption: ScaExemption.LowValue,
  mobileNumber: '0799999999',
  phoneCountryCode: '44',
  emailAddress: 'email@me.com'
}

try {
  const judo = new JudoPay(authorization)
  const response = await judo.invokeTransaction(JudoTransactionType.Payment, configuration)

  if (response != null) {
  	console.log('Receipt', JSON.stringify(response))
  } else {
    console.error('Error', "invokeTransaction returned null response")
  }
} catch (error) {
    console.error(error)
}
