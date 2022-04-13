// (1) Prepare the 3dsecure2 payment:
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

// (2) Send the 3dsecure2 payment:
try
    {
        $cardPayment->setAttributeValues($attributes);
        $response = $cardPayment->create();
    } catch (\Exception $e) {
        return;
    }

// (3) Check the response:
//Challenge response example requesting additional device data is needed for 3D Secure 2
{
  "Response": {
    "ThreeDSecure": {
      "methodUrl": "https://example.com/pay-sim/sim/acs",
      "version": "2.1.0",
      "md": "ewogICJ0aHJlZURTU2VydmVyVHJhbnNJRCIgOiAiYjNjY2IxYWItZTk5"
    },
    "receiptId": "68869013641206075392",
    "message": "Issuer ACS has requested additional device data gathering",
    "result": "Additional device data is needed for 3D Secure 2"
  },
