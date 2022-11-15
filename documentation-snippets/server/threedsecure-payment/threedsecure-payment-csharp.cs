// See Payment, PreAuth sections for details of how to trigger an initial transaction with required 3DS2 attributes

// If the response indicated device details check are required, POST the returned md (as an attribute named
// threeDSMethodData) to the returned methodUrl, and wait for a call from ACS to the methodNotificationUrl supplied on
// the initial transaction

// Once the call to the methodNotificationUrl has been received, create an instance of the ResumeThreeDSecureTwo Model
var resumeThreeDsRequest = new ResumeThreeDSecureTwoModel()
{
    MethodCompletion = MethodCompletion.Yes,
    CV2 = "452",
    // PrimaryAccountDetails only required for MCC6012 merchants
    PrimaryAccountDetails = new PrimaryAccountDetailsModel
    {
        Name = "Smith",
        AccountNumber = "1234567",
        DateOfBirth = "2000-12-31",
        PostCode = "EC2A 4DP"
    },
};
    
// Use the ReceiptId from the original transaction response
var resumeResponse = await client.ThreeDs.Resume3DSecureTwo(result.Response.ReceiptId, resumeThreeDsRequest);
    
if (resumeResponse.HasError)
{
    if (resumeResponse.Error.Code == (int)HttpStatusCode.Forbidden)
    {
        // Failed to authenticate - check your credentials
    }
    else if (resumeResponse.Error.ModelErrors != null)
    {
        // Validation failed on the request, check each list entry for details
    }
    else
    {
        // Refer to https://docs.judopay.com/Content/Developer%20Tools/Codes.htm#Errors
        var errorCode = resumeResponse.Error.Code;
    }
}
else if (resumeResponse.Response is PaymentRequiresThreeDSecureTwoModel resumeChallengeRequiredModel)
{
    // Challenge is required - POST creq to challengeUrl
    var challengeUrl = resumeChallengeRequiredModel.ChallengeUrl;
    var creq = resumeChallengeRequiredModel.CReq;
}
else if (resumeResponse.Response is PaymentReceiptModel resumeReceipt)
{
    // Transaction has been processed
    var receiptId = resumeReceipt.ReceiptId;
    var status = resumeReceipt.Result;
}



// If either the initial transaction response, or the resume response, indicated a challenge is required, POST the
// returned creq to the returned challengeUrl, and wait for a call from ACS to the challengeNotificationUrl supplied on
// the initial transaction

// Once the call to the challengeNotificationUrl has been received, create an instance of the CompleteThreeDSecureTwo
// Model
var completeThreeDsRequest = new CompleteThreeDSecureTwoModel()
{
    CV2 = "452",
    // PrimaryAccountDetails only required for MCC6012 merchants
    PrimaryAccountDetails = new PrimaryAccountDetailsModel
    {
        Name = "Smith",
        AccountNumber = "1234567",
        DateOfBirth = "2000-12-31",
        PostCode = "EC2A 4DP"
    }
};
    
// Use the ReceiptId from the original transaction response
var completeResponse = await client.ThreeDs.Complete3DSecureTwo(result.Response.ReceiptId, completeThreeDsRequest);
    
if (completeResponse.HasError)
{
    if (completeResponse.Error.Code == (int)HttpStatusCode.Forbidden)
    {
        // Failed to authenticate - check your credentials
    }
    else if (completeResponse.Error.ModelErrors != null)
    {
        // Validation failed on the request, check each list entry for details
    }
    else
    {
        // Refer to https://docs.judopay.com/Content/Developer%20Tools/Codes.htm#Errors
        var errorCode = completeResponse.Error.Code;
    }
}
else if (resumeResponse.Response is PaymentReceiptModel completeReceipt)
{
    // Transaction has been processed
    var receiptId = completeReceipt.ReceiptId;
    var status = completeReceipt.Result;
}