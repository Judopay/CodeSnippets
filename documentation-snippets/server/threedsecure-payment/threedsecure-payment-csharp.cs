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


//Challenge response example requesting Additional device data is needed for 3D Secure 2
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
    
    //Once the additional device data has been collected, create an instance of the ResumeThreeDSecureTwo Model
    var resumeModel = new ResumeThreeDSecureTwoModel()
{
    CV2 = "452",
    MethodCompletion = MethodCompletion.Yes
};
    
    //Resume the transaction flow to Judopay
    var resumeResult = await client.ThreeDs.Resume3DSecureTwo(result.Response.ReceiptId, resumeModel);
