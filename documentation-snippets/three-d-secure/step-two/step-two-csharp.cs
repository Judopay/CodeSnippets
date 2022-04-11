// (1) Send the 3D Secure 2 transaction request to Judopay: 

var result = await client.Payments.Create(paymentModel);

// (2) Check the response
//For the purpose of this exercise the challenge response has been returned, requesting: "Additional device data is needed for 3D Secure 2":
{
  "Response": {
    "ThreeDSecure": {
      "methodUrl": "https://example.com/pay-sim/sim/acs",
      "version": "2.1.0",
      "md": "ewogICJ0aHJlZURTU2VydmVyVHJhbnNJRCIgOiAiYjNjY2IxYWItZTk5"
    },
    "receiptId": "68869013641206075392",
    "message": "Issuer ACS has requested additional device data gathering",
    "result": "Additional device data is needed for 3D Secure 2"
  },
  
// (3) Once the additional device data has been collected, create an instance of the ResumeThreeDSecureTwo Model:

var resumeModel = new ResumeThreeDSecureTwoModel()
{
    CV2 = "452",
    MethodCompletion = MethodCompletion.Yes
};