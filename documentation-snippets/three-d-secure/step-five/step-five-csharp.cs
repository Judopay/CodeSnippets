// (1) Create an instance of the CompleteThreeDSecureTwo Model:

var completeModel = new CompleteThreeDSecureTwoModel()
{
    CV2 = "452"
};

// (2) Complete the transaction flow to Judopay: 

var completeResult = await client.ThreeDs.Complete3DSecureTwo(result.Response.ReceiptId, completeModel);

//Check the response.
