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
        'cardHolderName' => 'John Doe',
        'mobileNumber' => '07999999999',
        'phoneCountryCode' => '41',
        'emailAddress' => 'contact@judopay.com',
        'threeDSecure' => [
            'authenticationSource' => 'BROWSER',
            'methodCompletion' => 'no'
        ]
    ]  
    ];   $payment->setAttributeValues($attributes);    
