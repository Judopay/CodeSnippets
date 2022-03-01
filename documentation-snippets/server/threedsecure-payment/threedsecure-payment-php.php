//The Payment Model created for Creating a Payment, just needs the following additional 3D Secure 2 parameters to be included
 $payment = $judopay->getModel('Payment');    
   $attributes = [     
    ...
        'cardHolderName' => 'First Last',
        'mobileNumber' => '07999999999',
        'phoneCountryCode' => '41',
        'emailAddress' => 'contact@judopay.com',
        'threeDSecure' => [
            'authenticationSource' => 'BROWSER',
            'methodCompletion' => 'no'
        ]
    ];   

//Send the 3dsecure2 payment
try
    {
        $cardPayment->setAttributeValues($attributes);
        $response = $cardPayment->create();
    } catch (\Exception $e) {
        return;
    }
