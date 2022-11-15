//Prepare the Refund request
$refundRequest = $judopay->getModel('Refund');

$refundRequest->setAttributeValues(
    array(
        'receiptId' => 'yourPaymentReceiptId',
        'yourPaymentReference' => 'yourRefundReference',
        'amount' => 1.01 // Optional, if not specified full payment amount will be refunded
    )
);

try {
    //Send the request to Judopay
    $response = $refundRequest->create();

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
