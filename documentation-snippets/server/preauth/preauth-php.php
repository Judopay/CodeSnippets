// Create an instance of the Preauth model
$preauth = $judopay->getModel('Preauth');

// Prepare the attributes
$attributes = [
    'judoId' => 'yourJudoId',
    'cardNumber' => '4976000000003436',
    'expiryDate' => '12/25',
    'yourConsumerReference' => 'yourConsumerReference'
    'yourPaymentReference' => 'yourPaymentReference'
    'cv2' => '452',
    'amount' => 1.01,
    'currency' => 'GBP',
];

try {
    // Set attributes and send the request to Judopay
    $preauth->setAttributeValues($attributes);
    $response = $preauth->create();
} 
catch (\Exception $e) {
    return $e;
}
