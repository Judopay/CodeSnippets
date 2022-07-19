CompleteThreeDSecureTwo:
   $completeRequest = $judopay3ds2->getModel('CompleteThreeDSecureTwo');
        $attributes = [
            'receiptId' => $response['receiptId'],
            'cv2' => '452',
            "primaryAccountDetails":{
               "name":"John Smith",
               "accountNumber":"123456",
               "dateOfBirth":"1980-01-01",
               "postCode":"EC2A 4DP"
        ];
        $completeRequest->setAttributeValues($attributes);       
 $response = $completeRequest->update();
 
