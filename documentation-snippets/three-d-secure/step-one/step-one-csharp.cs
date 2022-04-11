var paymentModel = new CardPaymentModel()
{  
     JudoId = "yourJudoId",
       YourConsumerReference = "yourConsumerReference",
       YourPaymentReference = "yourPaymentReference",
       Amount = 12.99,
       CardNumber = "1236358700088456",
       CV2 = "452",
       ExpiryDate = "12/25",
       CardAddress = new CardAddressModel
        {
         PostCode = "postCode"
        }
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
