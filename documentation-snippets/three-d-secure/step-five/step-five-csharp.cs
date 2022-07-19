// (1) Create an instance of the CompleteThreeDSecureTwo Model:
var completeModel = new CompleteThreeDSecureTwoModel()
{
    CV2 = "452",
    "primaryAccountDetails":{
      "name":"John Smith",
      "accountNumber":"123456",
      "dateOfBirth":"1980-01-01",
      "postCode":"EC2A 4DP"
   }
};

// (2) Complete the transaction flow to Judopay: 
var completeResult = await client.ThreeDs.Complete3DSecureTwo(result.Response.ReceiptId, completeModel);
