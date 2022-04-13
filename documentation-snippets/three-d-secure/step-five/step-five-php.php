CompleteThreeDSecureTwo:
   $completeRequest = $judopay3ds2->getModel('CompleteThreeDSecureTwo');
        $attributes = [
            'receiptId' => $response['receiptId'],
            'cv2' => '452'
        ];
        $completeRequest->setAttributeValues($attributes);       
 $response = $completeRequest->update();
 
