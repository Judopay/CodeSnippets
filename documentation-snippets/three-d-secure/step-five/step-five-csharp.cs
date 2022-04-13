// (1) Check the response
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

// (2) Create an instance of the CompleteThreeDSecureTwo Model:
var completeModel = new CompleteThreeDSecureTwoModel()
{
    CV2 = "452"
};

// (3) Complete the transaction flow to Judopay: 
var completeResult = await client.ThreeDs.Complete3DSecureTwo(result.Response.ReceiptId, completeModel);
