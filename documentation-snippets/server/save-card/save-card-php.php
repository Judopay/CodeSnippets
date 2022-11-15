//Prepare the SaveCard request
$saveCardRequest = $judopay->getModel('SaveCard');

$saveCardRequest->setAttributeValues(
    array(
        'judoId' => 'yourJudoId',
        'yourConsumerReference' => 'yourConsumerReference',
        'cardNumber' => '4976000000003436',
        'expiryDate' => '12/25'
    )
);

try {
    //Send the request to Judopay
    $response = $saveCardRequest->create();

    $receiptId = $response['receiptId'];
    if ($response['result'] == 'Success')
    {
        $cardToken = $response['cardDetails']['cardToken'];
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
