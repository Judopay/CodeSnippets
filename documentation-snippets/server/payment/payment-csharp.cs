//Create an instance of the card payment model
var payment = new CardPaymentModel
  {
       JudoId = "yourJudoId",
       YourConsumerReference = "yourUniqueReference",
       YourPaymentReference = "yourPaymentReference",
       Amount = 25,
       CardNumber = "1236358700088456",
       CV2 = "341",
       ExpiryDate = "12/25",
       CardAddress = new CardAddressModel
      {
         PostCode = "postCode"
       }
    };
//Send the payment to Judopay
var response = await client.Payments.Create(payment);
