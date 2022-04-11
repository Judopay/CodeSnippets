$payment = $judopay->getModel('Payment');    
   $attributes = [
        'amount' => 12.99,
        'cardNumber' => '4976000000003436',
        'expiryDate' => '12/25',
        'yourConsumerReference' => 'youConsumerReference',
        'yourPaymentReference' => 'yourPaymentReference',
        'cv2' => '452',
        'currency' => 'GBP',
        'judoId' => 'yourJudoId'
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
