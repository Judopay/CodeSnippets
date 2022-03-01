//Create an instance of the RegisterCard Model
var register = new RegisterCardModel {         
    JudoId = "yourJudoId",         
    YourConsumerReference = "yourUniqueReference",         
    YourPaymentReference = "yourPaymentReference",         
    CardNumber = "4906000780007612",         
    ExpiryDate = "12/25",        
    CV2 = "452",         
        CardAddress = new CardAddressModel {             
            PostCode = "postCode"        
                    }         
        ThreeDSecure = new ThreeDSecureTwoModel {         
              AuthenticationSource = ThreeDSecureTwoAuthenticationSource.Browser,           
            ChallengeRequestIndicator = ThreeDSecureTwoChallengeRequestIndicator.ChallengePreferred,
            ScaExemption = ThreeDSecureTwoScaExemption.SecureCorporate   
        }
};

//Send the register request to Judopay
var result = await 
client.RegisterCards.Create(register);
if (!result.HasError)

{
    var receipt = result.Response as PaymentReceiptModel;
}
