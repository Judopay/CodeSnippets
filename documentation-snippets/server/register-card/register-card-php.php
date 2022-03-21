//Prepare the register card request
$registerCard = $judopay->getModel('RegisterCard');    
     $attributes = [
        'cardNumber' => '4976000000003465',
        'expiryDate' => '12/25',
        'cv2' => '452',
        'judoId' => 'yourJudoId',
        'yourConsumerReference' => 'yourConsumerReference',
        'yourPaymentReference' => 'yourPaymentReference'
    ];    $registerCard->setAttributeValues($attributes);

//Send the request to Judopay
try {
        $response = $registerCard->create();
             // Handle successful payment        
             $cardToken = $response['cardDetails']['cardToken'];    
                 } catch (\Exception $e) {
                 // Handle the errors
               return;
    }

//Get the card token from the reponse
$cardToken = $response['cardDetails']['cardToken'];
