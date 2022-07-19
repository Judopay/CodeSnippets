// (1) Once the additional device data has been collected, create an instance of the ResumeThreeDSecureTwo Model:

var resumeModel = new ResumeThreeDSecureTwoModel()
{
    CV2 = "452",
    MethodCompletion = MethodCompletion.Yes
    "primaryAccountDetails":{
      "name":"John Smith",
      "accountNumber":"123456",
      "dateOfBirth":"1980-01-01",
      "postCode":"EC2A 4DP"
      }        
   };

// (2) Resume the transaction flow to Judopay: 
//Use the ReceiptId from the original response

var resumeResult = await client.ThreeDs.Resume3DSecureTwo(result.Response.ReceiptId, resumeModel);
