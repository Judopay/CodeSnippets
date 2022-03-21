//Create an instance of the card payment model
var payment = new CardPaymentModel
  {
       JudoId = "yourJudoId",
       YourConsumerReference = "yourConsumerReference",
       YourPaymentReference = "yourPaymentReference",
       Amount = 12.99,
       CardNumber = "4976000000003465",
       CV2 = "452",
       ExpiryDate = "12/25",
       CardAddress = new CardAddressModel
      {
         PostCode = "postCode"
       }
    };
//Send the payment to Judopay
var response = await client.Payments.Create(payment);

//If response.HasError = true, check the error content
{Code = 403Message = 
"Sorry, but we were unable to authenticate your request. Please check your details and try again.
"Category = 1}
