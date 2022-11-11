//Create an instance of the CheckCard Model
var checkCardRequest = new CheckCardModel
{
    JudoId = "yourJudoId",
    YourConsumerReference = "yourConsumerReference",
    YourPaymentReference = "yourPaymentReference",
    CardNumber = "4976000000003436",
    ExpiryDate = "12/25",
    CV2 = "452",
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
    CardHolderName = "John Doe",
    ThreeDSecure = new ThreeDSecureTwoModel
    {
        AuthenticationSource = ThreeDSecureTwoAuthenticationSource.Browser,
        ChallengeRequestIndicator = ThreeDSecureTwoChallengeRequestIndicator.ChallengeAsMandate,
        MethodNotificationUrl = "https://yourMethodNotificationUrl",
        ChallengeNotificationUrl = "https://yourChallengeNotificationUrl"
    }
};

//Send the request to Judopay
var response = await client.CheckCards.Create(checkCardRequest)
