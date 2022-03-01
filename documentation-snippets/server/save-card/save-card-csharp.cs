Create an instance of the SaveCardModel
var saveCardRequest = new SaveCardModel()
   {
      CardNumber = "4976000000003436",
      ExpiryDate = "12/25",
      JudoId = cybersourceJudoId,
      YourConsumerReference = "ASC123",
 };
 
 //Send the request to Judopay
 var result = await
client.SaveCards.Create(saveCardRequest);
