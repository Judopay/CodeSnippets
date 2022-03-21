//Create an instance of the TokenPaymentModel
var tokenPayment = new TokenPaymentModel()
    {
        JudoId = yourJudoId,
        YourConsumerReference = receipt.Consumer.YourConsumerReference,
        Amount = 12.99,
        CV2 = "452",
        CardToken = receipt.CardDetails.CardToken
    };    
    
    //Send the request to Judopay using the token received from the RegisterCard response
    var Receipt = await client.Payments.Create(tokenPayment);
