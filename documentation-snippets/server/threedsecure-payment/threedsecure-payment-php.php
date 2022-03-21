//The Payment Model created for Creating a Payment, just needs the following additional 3D Secure 2 parameters to be included
 $payment = $judopay->getModel('Payment');    
   $attributes = [     
    ...
        'cardHolderName' => 'John Doe',
        'mobileNumber' => '07999999999',
        'phoneCountryCode' => '44',
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

//Check the response. Example challenge response has been returned requesting Additional device data is needed for 3D Secure 2
//Once the additional device data has been collected resume the transaction flow to Judopay:
$resumeRequest = $judopay3ds2->getModel('ResumeThreeDSecureTwo');
        $attributes = [
            'receiptId' => $response['receiptId'],
            'cv2' => '452',
            'methodCompletion' => 'no'
        ];
        $resumeRequest->setAttributeValues($attributes);       
 $response = $resumeRequest->update();

//Complete the transaction flow to Judopay
 $completeRequest = $judopay3ds2->getModel('CompleteThreeDSecureTwo');
        $attributes = [
            'receiptId' => $response['receiptId'],
            'cv2' => '452'
        ];
        $completeRequest->setAttributeValues($attributes);       
 $response = $completeRequest->update();
