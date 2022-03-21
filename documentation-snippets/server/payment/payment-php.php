//Prepare the payment
$payment = $judopay->getModel('Payment');    
   $attributes = [
        'amount' => 12.99,
        'cardNumber' => '4976000000003465',
        'expiryDate' => '12/25',
        'yourConsumerReference' => 'yourConsumerReference',
        'yourPaymentReference' => 'yourPaymentReference',
        'cv2' => '452',
        'currency' => 'GBP',
        'judoId' => 'yourJudoId'
    ];   $payment->setAttributeValues($attributes);   
//Send the payment
 try {
        $response = $payment->create();
        // Handle successful payment
        return;
            } catch (\Exception $e) {
            echo $e->getMessage();
        // Handle the errors 
        return;
    }
