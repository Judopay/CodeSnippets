// (1) Create an instance of the CardPaymentModel:
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
        ChallengeRequestIndicator = ThreeDSecureTwoChallengeRequestIndicator.ChallengeAsMandate,
        ScaExemption = ThreeDSecureTwoScaExemption.SecureCorporate
    }
};

// (2) Send the 3ds2 request to Judopay
var result = await client.Payments.Create(paymentModel);


// (3) Challenge response example requesting additional device data is needed for 3D Secure 2
{
  "Response": {
    "ThreeDSecure": {
      "methodUrl": "https://example.com/pay-sim/sim/acs",
      "version": "2.1.0",
      "md": "ewogICJ0aHJlZURTU2VydmVyVHJhbnNJRCIgOiAiYjNjY2IxYWItZTk5"
    },
    "receiptId": "68869013641206075392",
    "message": "Issuer ACS has requested additional device data gathering",
    "result": "Additional device data is needed for 3D Secure 2"
  },
