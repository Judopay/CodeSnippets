//Prepare the payment
$payment = $judopay->getModel('Payment');    
   $attributes = [
        'amount' => 1.10,
        'cardNumber' => '4976000000003436',
        'expiryDate' => '12/25',
        'yourConsumerReference' => 'consumerRef',
        'yourPaymentReference' => 'paymentRef',
        'cv2' => '452',
        'currency' => 'GBP',
        'judoId' => '100200300'
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
