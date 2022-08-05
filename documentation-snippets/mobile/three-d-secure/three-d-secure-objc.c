JPAmount *amount = [[JPAmount alloc] initWithAmount:@"1.50" currency:@"GBP"];
JPReference *reference = [[JPReference alloc] initWithConsumerReference:@"consumer-reference" paymentReference:@"payment-reference"];

JPUIConfiguration *uiConfiguration = [JPUIConfiguration new];

// sets whether 3DS 2.0 UI billing information screen should be presented to the user
uiConfiguration.shouldAskForBillingInformation = YES;

// in case you don't want to present billing info screen to the user, you can set the address instead
JPAddress *address = [[JPAddress alloc] initWithAddress1:@"My house"
                                                address2:@"My street"
                                                address3:@"My area"
                                                    town:@"My town"
                                                postCode:@"TR14 8PA"
                                             countryCode:@826];

JPConfiguration *configuration = [[JPConfiguration alloc] initWithJudoID:@"my-judo-id" amount:amount reference:reference];
configuration.uiConfiguration = uiConfiguration;

configuration.cardAddress = address;


// sets the value for challenge request indicator,
// possible values:
//
// noPreference
// noChallenge
// challengePreferred
// challengeAsMandate
//
configuration.challengeRequestIndicator = @"challengeAsMandate";

// sets the value for SCA exemption,
// possible values:
//
// lowValue
// secureCorporate
// trustedBeneficiary
// transactionRiskAnalysis
//
configuration.scaExemption = @"lowValue";

// email address
configuration.emailAddress = @"email@me.com";

// sets the maximum timeout for 3DS 2.0 transactions in seconds
configuration.threeDSTwoMaxTimeout = 30;

// sets phone number country code
configuration.phoneCountryCode = @"44";

// phone number
configuration.mobileNumber = @"11223344556677";
