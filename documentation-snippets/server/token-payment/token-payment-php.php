//Prepare the token payment
$tokenPayment = $judopay->getModel('TokenPayment');   
 $tokenPaymentAttributes = [
        'amount' => 12.99,
        'cardToken' => $cardToken,
        'expiryDate' => '12/25',
        'yourConsumerReference' =>  'yourConsumerReference',
        'yourPaymentReference' => 'yourPaymentReference',
        'cv2' => '452',
        'currency' => 'GBP',
        'judoId' => 'yourJudoId'
    ];    $tokenPayment->setAttributeValues($tokenPaymentAttributes);

//Send the token payment
try {
        $tokenPaymentResponse = $tokenPayment->create();
        // Handle successful payment    
        } catch (\Exception $e) {
        // Handle the errors
        return;
    }
