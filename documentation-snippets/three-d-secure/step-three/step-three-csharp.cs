// (1) Once the additional device data has been collected, create an instance of the ResumeThreeDSecureTwo Model:

var resumeModel = new ResumeThreeDSecureTwoModel()
{
    CV2 = "452",
    MethodCompletion = MethodCompletion.Yes
   };

// (2) Resume the transaction flow to Judopay: 
//Use the ReceiptId from the original response

var resumeResult = await client.ThreeDs.Resume3DSecureTwo(result.Response.ReceiptId, resumeModel);
