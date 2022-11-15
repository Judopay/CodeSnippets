//Create an instance of the SaveCardModel
var saveCardRequest = new SaveCardModel()
{
    JudoId = "yourJudoId",
    YourConsumerReference = "yourConsumerReference",
    CardNumber = "4976000000003436",
    ExpiryDate = "12/25"
};
 
//Send the request to Judopay
var response = await client.SaveCards.Create(saveCardRequest);

if (response.HasError)
{
    if (response.Error.Code == (int)HttpStatusCode.Forbidden)
    {
        // Failed to authenticate - check your credentials
    }
    else if (response.Error.ModelErrors != null)
    {
        // Validation failed on the request, check each list entry for details
    }
    else
    {
        // Refer to https://docs.judopay.com/Content/Developer%20Tools/Codes.htm#Errors
        var errorCode = response.Error.Code;
    }
}
else if (response.Response is PaymentReceiptModel receipt)
{
    var receiptId = receipt.ReceiptId;
    var status = receipt.Result;
    if (receipt.Result == "Success")
    {
        var cardToken = receipt.CardDetails.CardToken;
    }
}