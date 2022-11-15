// Create an instance of the Void model
var voidRequest = new VoidModel()
{
    ReceiptId = yourPreauthReceiptId
};

//Send the request to Judopay
var response = await client.Voids.Create(voidRequest);

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
}