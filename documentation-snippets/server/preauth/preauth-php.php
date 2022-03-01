//Prepare the preauth
$preauth = $judopay->getModel('Preauth');    
        $attributes = [
        'amount' => 1.10,
        'cardNumber' => '4976000000003436',
        'expiryDate' => '12/25',
        'yourConsumerReference' => 'azerty',
        'yourPaymentReference' => 'azerty',
        'cv2' => '452',
        'currency' => 'GBP',
        'judoId' => '100915867'
    ];  $preauth->setAttributeValues($attributes);
    
    //Send the preauth
    try {
        $response = $preauth->create();
        // Handle successful payment
        return;
    } catch (\Exception $e) {
       echo $e->getMessage();
        // Handle the errors
        return;
    }
