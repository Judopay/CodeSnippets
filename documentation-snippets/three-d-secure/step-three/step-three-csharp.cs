// (1) Once the additional device data has been collected, create an instance of the ResumeThreeDSecureTwo Model:

var resumeModel = new ResumeThreeDSecureTwoModel()
{
    CV2 = "452",
    MethodCompletion = MethodCompletion.Yes
};


// (2) Resume the transaction flow to Judopay: 
//Use the ReceiptId from the original response

var resumeResult = await client.ThreeDs.Resume3DSecureTwo(result.Response.ReceiptId, resumeModel);

// (3) Check the response

//If no additional transaction checks are required, you will receive the usual paymentReceipt response.
//If additional transaction checks are required, you will receive the completion response

//For the purpose of this exercise, the completion response has been returned, requesting: "Challenge completion is needed for 3D Secure 2":

{
  "Response": {
    "ThreeDSecure": {
      "challengeUrl": "https://example.com/challenge/brw/acs",
      "version": "2.1.0",
      "md": "ewogICJ0aHJlZURTU2VydmVyVHJhbnNJRCIgOiAiYjNjY2IxYWItZTk5"
    },
    "receiptId": "68869013641206075392",
    "message": "Issuer ACS has responded with a Challenge URL",
    "result": "Challenge completion is needed for 3D Secure 2"
  },
}

