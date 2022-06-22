// Create an instance of the CardPayment model
var paymentModel = new CardPaymentModel()
{
    Amount = 42,
    Currency = "GBP",
    JudoId = "yourJudoId",
    YourConsumerReference = "yourConsumerReference",
    YourPaymentReference = "yourPaymentReference",
    CardNumber = "4976000000003436",
    ExpiryDate = "12/25",
    CV2 = "452"
};

// Send the request to Judopay as a PreAuth 
try {
    var preauthResult = await client.PreAuths.Create(paymentModel);
}
catch (Exception e) {
    throw (e);
}
