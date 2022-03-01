//Create an instance of the CheckCard Model
var checkCardRequest = new CheckCardModel
   {
     CV2 = "452",
     CardNumber = "4976000000003436",
     ExpiryDate = "12/25",
     JudoId = "yourJudoId", 
     YourConsumerReference =  "yourUniqueReference",
   };

//Send the request to Judopay
var result = await 
client.CheckCards.Create(checkCardRequest)
