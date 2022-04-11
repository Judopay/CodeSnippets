// (1) Once the additional device data has been collected, resume the transaction flow to Judopay:
//Use the ReceiptId from the original response.

ResumeThreeDSecureTwo:
 $resumeRequest = $judopay3ds2->getModel('ResumeThreeDSecureTwo');
        $attributes = [
            'receiptId' => $response['receiptId'],
            'cv2' => '452',
            'methodCompletion' => 'no'
        ];
        $resumeRequest->setAttributeValues($attributes);       
 $response = $resumeRequest->update();
 

// (2) Check the response.
//If no additional transaction checks are required, you will receive the usual paymentReceipt response.
//If additional transaction checks are required, you will receive the completion response.
