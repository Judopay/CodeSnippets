//Prepare the Void request
$voidRequest = $judopay->getModel('VoidTransaction');

$voidRequest->setAttributeValues(
    array(
        'judoId' => 'yourJudoId', // This attribute will not be required in the next version of the SDK
        'receiptId' => 'yourPreauthReceiptId',
        'yourPaymentReference' => 'yourVoidReference',
        'amount' => 1.01
    )
);

try {
    //Send the request to Judopay
    $response = $voidRequest->create();

    $receiptId = $response['receiptId'];
    $status = $response['result'];
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
