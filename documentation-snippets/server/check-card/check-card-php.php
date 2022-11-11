//Prepare the CheckCard request
$checkCardRequest = $judopay->getModel('CheckCard');

$checkCardRequest->setAttributeValues(
    array(
        'judoId' => 'yourJudoId',
        'yourConsumerReference' => 'yourConsumerReference',
        'yourPaymentReference' => 'yourPaymentReference',
        'cardNumber' => '4976000000003465',
        'expiryDate' => '12/25',
        'cv2' => '452',
        'cardAddress' => array(
            'address1' => '41 Luke St',
            'postCode' => 'EC2A 4DP',
            'town' => 'London',
            'countryCode' => 826
        ),
        // PrimaryAccountDetails only required for MCC6012 merchants
        'primaryAccountDetails' => array(
            'name' => 'Smith',
            'accountNumber' => '1234567',
            'dateOfBirth' => '2000-12-31',
            'postCode' => 'EC2A 4DP'
        ),
        // Following are for 3DS2 transactions
        'phoneCountryCode' => '44',
        'mobileNumber' => '7999123456',
        'emailAddress' => 'test.user@judopay.com',
        'cardHolderName' => 'John Doe',
        'threeDSecure' => array(
            'authenticationSource'      => 'Browser',
            'challengeRequestIndicator' => 'ChallengeAsMandate',
            'methodNotificationUrl'     => 'https://yourMethodNotificationUrl',
            'challengeNotificationUrl'  => 'https://yourMethodNotificationUrl'
    )
)

//Send the request to Judopay
$response = $checkCardRequest->create();
