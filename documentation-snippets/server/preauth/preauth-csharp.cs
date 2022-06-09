//Create an instance of the CardPaymentModel
var preauth = new CardPaymentModel
 {
   JudoId = "yourJudoId",
   YourConsumerReference = "yourConsumerReference",
   YourPaymentReference = "yourPaymentReference",
   Amount = 25,
   CardNumber = "4976000000003465",
   CV2 = "452",
   ExpiryDate = "12/25",
   CardAddress = new CardAddressModel
      {
        PostCode = "postCode"
           }
   ThreeDSecure = new ThreeDSecureTwoModel
       {
         AuthenticationSource = ThreeDSecureTwoAuthenticationSource.Browser,
         ChallengeRequestIndicator = ThreeDSecureTwoChallengeRequestIndicator.ChallengeAsMandate,
         ScaExemption = ThreeDSecureTwoScaExemption.SecureCorporate
               }
};            

//Send the preauth to Judopay
var preauthResult = await client.PreAuths.Create(preauth);

//If the preauthResult.response = successful collect the preauth amount
if (!result.HasError)  {   
var collection = new CollectionModel()    {      
ReceiptId = result.Response.ReceiptId,      
Amount = 20      };                
var collectionResponse = await client.Collections.Create(collection);  
}
