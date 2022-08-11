const uiConfiguration: JudoUIConfiguration = {
  isAVSEnabled: false,
  shouldPaymentMethodsVerifySecurityCode: false,
  shouldPaymentButtonDisplayAmount: false,
  shouldPaymentMethodsDisplayAmount: false,

  // sets whether 3DS 2.0 UI billing information screen should be presented to the user
  shouldAskForBillingInformation: true
}

// in case you don't want to present billing info screen to the user, you can set the address instead
const cardAddress: JudoAddress = {
  line1: 'My house',
  line2: 'My street',
  line3: 'My area',
  town: 'My town',
  postCode: 'TR14 8PA',
  countryCode: 382,
}

const judo: JudoConfiguration = {
  judoId: '123456',
  reference,
  amount,
  paymentMethods: JudoPaymentMethod.Card,
  supportedCardNetworks: JudoCardNetwork.Visa,

  uiConfiguration,
  cardAddress,

  // sets the value for challenge request indicator,
  // possible values:
  // ChallengeRequestIndicator.NoPreference
  // ChallengeRequestIndicator.NoChallenge
  // ChallengeRequestIndicator.ChallengePreferred
  // ChallengeRequestIndicator.ChallengeAsMandate
  challengeRequestIndicator: ChallengeRequestIndicator.ChallengeAsMandate,

  // sets the value for SCA exemption,
  // possible values:
  // ScaExemption.LowValue
  // ScaExemption.SecureCorporate
  // ScaExemption.TrustedBeneficiary
  // ScaExemption.TransactionRiskAnalysis
  scaExemption: ScaExemption.LowValue,
  
  // email address
  emailAddress: 'email@me.com',
  
  // sets the maximum timeout for 3DS 2.0 transactions in minutes
  threeDSTwoMaxTimeout: 30,

  // sets phone number country code
  phoneCountryCode: '44',

  // phone number
  mobileNumber: '0799999999',
}
