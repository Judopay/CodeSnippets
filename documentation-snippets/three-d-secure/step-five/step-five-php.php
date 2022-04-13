// (1) Check the response.
//If no additional transaction checks are required, you will receive the usual paymentReceipt response.
//If additional transaction checks are required, you will receive the completion response.

// (2) Complete the transaction flow to Judopay.
CompleteThreeDSecureTwo:
   $completeRequest = $judopay3ds2->getModel('CompleteThreeDSecureTwo');
        $attributes = [
            'receiptId' => $response['receiptId'],
            'cv2' => '452'
        ];
        $completeRequest->setAttributeValues($attributes);       
 $response = $completeRequest->update();
 
