//Create an instance of the CardPayment Model
var paymentRequest = new CardPaymentModel
{
    JudoId = "yourJudoId",
    YourConsumerReference = "yourConsumerReference",
    YourPaymentReference = "yourPaymentReference",
    CardNumber = "4976000000003436",
    ExpiryDate = "12/25",
    CV2 = "452",
    Amount = 1.01m,
    Currency = "GBP",
    CardAddress = new CardAddressModel
    {
        Address1 = "41 Luke St",
        PostCode = "EC2A 4DP",
        Town = "London",
        CountryCode = 826
    },
    // PrimaryAccountDetails only required for MCC6012 merchants
    PrimaryAccountDetails = new PrimaryAccountDetailsModel
    {
        Name = "Smith",
        AccountNumber = "1234567",
        DateOfBirth = "2000-12-31",
        PostCode = "EC2A 4DP"
    },
    // Following are for 3DS2 transactions
    PhoneCountryCode = "44",
    MobileNumber = "7999123456",
    EmailAddress = "test.user@judopay.com",
    CardHolderName = "John Smith",
    ThreeDSecure = new ThreeDSecureTwoModel
    {
        AuthenticationSource = ThreeDSecureTwoAuthenticationSource.Browser,
        ChallengeRequestIndicator = ThreeDSecureTwoChallengeRequestIndicator.ChallengeAsMandate,
        MethodNotificationUrl = "https://yourMethodNotificationUrl",
        ChallengeNotificationUrl = "https://yourChallengeNotificationUrl"
    }
};

//Send the request to Judopay
var response = await client.Payments.Create(paymentRequest);

if (response.HasError)
{
    if (response.Error.Code == (int)HttpStatusCode.Forbidden)
    {
        // Failed to authenticate - check your credentials
    }
    else if (response.Error.ModelErrors != null)
    {
        // Validation failed on the request, check each list entry for details
    }
    else
    {
        // Refer to https://docs.judopay.com/Content/Developer%20Tools/Codes.htm#Errors
        var errorCode = response.Error.Code;
    }
}
else if (response.Response is PaymentRequiresThreeDSecureTwoModel threeDSecureTwoResponseModel)
{
    if (threeDSecureTwoResponseModel.MethodUrl != null)
    {
        // Device details are required - POST md as threeDSMethodData to methodUrl
        var methodUrl = threeDSecureTwoResponseModel.MethodUrl;
        var md = threeDSecureTwoResponseModel.Md;
    }
    else if (threeDSecureTwoResponseModel.ChallengeUrl != null)
    {
        // Challenge is required - POST creq to challengeUrl
        var challengeUrl = threeDSecureTwoResponseModel.ChallengeUrl;
        var creq = threeDSecureTwoResponseModel.CReq;
    }
}
else if (response.Response is PaymentReceiptModel receipt)
{
    var receiptId = receipt.ReceiptId;
    var status = receipt.Result;
    if (receipt.Result == "Success")
    {
        var cardToken = receipt.CardDetails.CardToken;
    }
}