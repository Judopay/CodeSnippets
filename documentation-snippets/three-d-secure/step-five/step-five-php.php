// (1) Complete the transaction flow to Judopay.


CompleteThreeDSecureTwo:
   $completeRequest = $judopay3ds2->getModel('CompleteThreeDSecureTwo');
        $attributes = [
            'receiptId' => $response['receiptId'],
            'cv2' => '452'
        ];
        $completeRequest->setAttributeValues($attributes);       
 $response = $completeRequest->update();
 
// (2) Check the response.
