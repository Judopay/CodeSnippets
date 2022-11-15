// See Payment, PreAuth sections for details of how to trigger an initial transaction with required 3DS2 attributes

// If the response indicated device details check are required, POST the returned md (as an attribute named
// threeDSMethodData) to the returned methodUrl, and wait for a call from ACS to the methodNotificationUrl supplied on
// the initial transaction

// Once the call to the methodNotificationUrl has been received, resume the transaction flow to Judopay
$resumeRequest = $judopay->getModel('ResumeThreeDSecureTwo');
$resumeRequest->setAttributeValues(
    array(
        'receiptId' => $response['receiptId'], // receiptId of the original transaction
        'methodCompletion' => 'yes',
        'cv2' => '452',
        // primaryAccountDetails only required for MCC6012 merchants
        'primaryAccountDetails' => array(
            'name' => 'Smith',
            'accountNumber' => '1234567',
            'dateOfBirth' => '2000-12-31',
            'postCode' => 'EC2A 4DP'
        )
    )
);

try {
    //Send the request to Judopay
    $resumeResponse = $resumeRequest->update();

    if ($resumeResponse['challengeUrl'])
    {
        // Challenge is required - POST creq to challengeUrl
        $challengeUrl = $resumeResponse['challengeUrl'];
        $creq = $resumeResponse['creq'];
    }
    else
    {
        // Transaction has been processed
        $receiptId = $response['receiptId'];
        $status = $response['result'];
    }
}
catch (\Judopay\Exception\ApiException $resumeApiException)
{
    $resumeErrorResponse = "{\"error\":\"{$resumeApiException->getSummary()}\",\"result\":\"Error\"}";
}
catch (\Judopay\Exception\ValidationError $resumeValidationErrors)
{
    // Required attributes are missing from the request
    $resumeErrorResponse = "{\"error\":\"{$resumeValidationErrors->getSummary()}\",\"result\":\"Error\"}";
}
catch (\Exception $resumeException)
{
    $resumeErrorResponse = "{\"error\":\"".$resumeException->getMessage()."\",\"result\":\"Error\"}";
}


// If either the initial transaction response, or the resume response, indicated a challenge is required, POST the
// returned creq to the returned challengeUrl, and wait for a call from ACS to the challengeNotificationUrl supplied on
// the initial transaction

// Once the call to the challengeNotificationUrl has been received, complete the transaction flow to Judopay

$completeRequest = $judopay>getModel('CompleteThreeDSecureTwo');
$completeRequest->setAttributeValues(
    array(
        'receiptId' => $response['receiptId'], // receiptId of the original transaction
        'cv2' => '452',
        // primaryAccountDetails only required for MCC6012 merchants
        'primaryAccountDetails' => array(
            'name' => 'Smith',
            'accountNumber' => '1234567',
            'dateOfBirth' => '2000-12-31',
            'postCode' => 'EC2A 4DP'
        )
    )
);

try {
    //Send the request to Judopay
    $completeResponse = $completeRequest->update();

    // Transaction has been processed
    $receiptId = $completeResponse['receiptId'];
    $status = $completeResponse['result'];
}
catch (\Judopay\Exception\ApiException $completeApiException)
{
    $completeErrorResponse = "{\"error\":\"{$completeApiException->getSummary()}\",\"result\":\"Error\"}";
}
catch (\Judopay\Exception\ValidationError $completeValidationErrors)
{
    // Required attributes are missing from the request
    $completeErrorResponse = "{\"error\":\"{$completeValidationErrors->getSummary()}\",\"result\":\"Error\"}";
}
catch (\Exception $completeException)
{
    $completeErrorResponse = "{\"error\":\"".$completeException->getMessage()."\",\"result\":\"Error\"}";
}
