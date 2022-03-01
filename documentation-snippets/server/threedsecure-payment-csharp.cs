//The instance of the CardPaymentModel created for Creating a Payment, just needs the following additional 3D Secure 2 parameters to be included
var paymentModel = new CardPaymentModel()
{  
    ...,
    CardHolderName = "CHALLENGE",
    MobileNumber = "07999999999",
    PhoneCountryCode = "44",
    EmailAddress = "contact@judopay.com",
    ThreeDSecure = new ThreeDSecureTwoModel
    {
        AuthenticationSource = ThreeDSecureTwoAuthenticationSource.Browser,
        ChallengeRequestIndicator = ThreeDSecureTwoChallengeRequestIndicator.ChallengePreferred,
        ScaExemption = ThreeDSecureTwoScaExemption.SecureCorporate
    }
};

//Send the 3ds2 request to Judopay
var result = await client.Payments.Create(paymentModel);
