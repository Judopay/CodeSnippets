Create an instance of the SaveCardModel
var saveCardRequest = new SaveCardModel()
   {
      CardNumber = "4976000000003465",
      ExpiryDate = "12/25",
      JudoId = yourJudoId,
      YourConsumerReference = "yourConsumerReference",
 };
 
 //Send the request to Judopay
 var result = await
client.SaveCards.Create(saveCardRequest);
