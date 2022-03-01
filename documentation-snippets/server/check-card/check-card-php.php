//Prepare the CheckCard request
$checkCard = $judopay->getModel('CheckCard');    $attributes = [
        'cardNumber' => '4976000000003436',
        'expiryDate' => '12/25',
        'cv2' => '452',
        'judoId' => '100915867',
        'yourConsumerReference' => 'consumerRef',
        'yourPaymentReference' => 'paymentRef' 
    ];    $checkCard->setAttributeValues($attributes);

//Send the request to Judopay
try {
    $response = $checkCard->create();
    // Handle successful payment    
     $cardToken = $response['cardDetails']['cardToken'];
     } catch (\Exception $e) {
    // Handle the errors
    return;
}

//Get the card token from the response
$cardToken = $response['cardDetails']['cardToken']; 
