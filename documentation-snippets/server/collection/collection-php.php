//Prepare the Collection request
$collectionRequest = $judopay->getModel('Collection');

$collectionRequest->setAttributeValues(
    array(
        'receiptId' => 'yourPreauthReceiptId',
        'yourPaymentReference' => 'yourCollectionReference',
        'amount' => 1.01
    )
);

try {
    //Send the request to Judopay
    $response = $collectionRequest->create();

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
