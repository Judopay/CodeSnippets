// Create an instance of the SaveCard model
$saveCard = $judopay3ds2->getModel('SaveCard');

// Prepare the attributes
$attributes = [
    'judoId' => 'yourJudoId',
    'cardNumber' => '4976000000003436',
    'expiryDate' => '12/25',
    'yourConsumerReference' => 'yourConsumerReference'
    'cv2' => '452'
];

try {
    // Set attributes and send the request to Judopay
    $saveCard->setAttributeValues($attributes);
    $response = $saveCard->create();
} 
catch (\Exception $e) {
    return $e;
}
