//Prepare the token payment
$tokenPayment = $judopay->getModel('TokenPayment');   
 $tokenPaymentAttributes = [
        'amount' => 1.10,
        'cardToken' => $cardToken,
        'expiryDate' => '12/25',
        'yourConsumerReference' =>  'consumerRef',
        'yourPaymentReference' => 'paymentRef',
        'cv2' => '452',
        'currency' => 'GBP',
        'judoId' => '100915867'
    ];    $tokenPayment->setAttributeValues($tokenPaymentAttributes);

//Send the token payment
try {
        $tokenPaymentResponse = $tokenPayment->create();
        // Handle successful payment    
        } catch (\Exception $e) {
        // Handle the errors
        return;
    }
