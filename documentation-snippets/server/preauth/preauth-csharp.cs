//Create an instance of the CardPaymentModel
var preauth = new CardPaymentModel
 {
   JudoId = "yourJudoId",
   YourConsumerReference = "yourUniqueReference",
   YourPaymentReference = "yourPaymentReference",
   Amount = 25,
   CardNumber = "4906000780007612",
   CV2 = "452",
   ExpiryDate = "12/25",
   CardAddress = new CardAddressModel
      {
        PostCode = "postCode"
           }
   ThreeDSecure = new ThreeDSecureTwoModel
       {
         AuthenticationSource = ThreeDSecureTwoAuthenticationSource.Browser,
         ChallengeRequestIndicator = ThreeDSecureTwoChallengeRequestIndicator.ChallengePreferred,
         ScaExemption = ThreeDSecureTwoScaExemption.SecureCorporate
               }
};            

//Send the preauth to Judopay
var preauthResult = await client.PreAuths.Create(preauth);
