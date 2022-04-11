// (1) Complete the transaction flow to Judopay: 

var completeResult = await client.ThreeDs.Complete3DSecureTwo(result.Response.ReceiptId, completeModel);

//Check the response.
