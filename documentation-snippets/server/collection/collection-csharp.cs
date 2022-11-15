// Create an instance of the Collection model
var collectionRequest = new CollectionModel()
{
    ReceiptId = yourPreauthReceiptId,
    Amount = 1.01m // Optional, if not specified full preauth amount will be collected
};

//Send the request to Judopay
var response = await client.Collections.Create(collectionRequest);

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