//Create a refund request
var refund = new RefundModel()
{
    ReceiptId = result.Response.ReceiptId,
    Amount = 20
};
//Send the refund request to Judopay
result = await client.Refunds.Create(refund);
