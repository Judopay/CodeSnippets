//Prepare the Payment request
$paymentRequest = $judopay->getModel('Payment');

$paymentRequest->setAttributeValues(
    array(
        'judoId' => 'yourJudoId',
        'yourConsumerReference' => 'yourConsumerReference',
        'yourPaymentReference' => 'yourPaymentReference',
        'cardNumber' => '4976000000003436',
        'expiryDate' => '12/25',
        'cv2' => '452',
        'amount' => 1.01,
        'currency' => 'GBP',
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
        'cardHolderName' => 'John Smith',
        'threeDSecure' => array(
            'authenticationSource'      => 'Browser',
            'challengeRequestIndicator' => 'ChallengeAsMandate',
            'methodNotificationUrl'     => 'https://yourMethodNotificationUrl',
            'challengeNotificationUrl'  => 'https://yourMethodNotificationUrl'
        )
    )
);

try {
    //Send the request to Judopay
    $response = $paymentRequest->create();

    if ($response['methodUrl'])
    {
        // Device details are required - POST md as threeDSMethodData to methodUrl
        $methodUrl = $response['methodUrl'];
        $md = $response['md'];
    }
    else if ($response['challengeUrl'])
    {
        // Challenge is required - POST creq to challengeUrl
        $challengeUrl = $response['challengeUrl'];
        $creq = $response['creq'];
    }
    else
    {
        $receiptId = $response['receiptId'];
        if ($response['result'] == 'Success')
        {
            $cardToken = $response['cardDetails']['cardToken'];
        }
    }
}
catch (\Judopay\Exception\ApiException $apiException)
{
    $errorResponse = "{\"error\":\"{$apiException->getSummary()}\",\"result\":\"Error\"}";
}
catch (\Judopay\Exception\ValidationError $validationErrors)
{
    // Required attributes are missing from the request
    $errorResponse = "{\"error\":\"{$validationErrors->getSummary()}\",\"result\":\"Error\"}";
}
catch (\Exception $e)
{
    $errorResponse = "{\"error\":\"".$e->getMessage()."\",\"result\":\"Error\"}";
}
