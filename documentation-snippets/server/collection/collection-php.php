//Prepare the collection
 $collection = $judopay->getModel('Collection');   
        $collectionAttributes = [
        'amount' => 12.99,
        'receiptId' => $receiptId,
        'yourPaymentReference' => 'qsdfg'
    ];    $collection->setAttributeValues($collectionAttributes);

//Send the collection
try {
    $response = $collection->create();
    // Handle successful collection} 
        return;
            } catch (\Exception $e) {
            echo $e->getMessage();
        // Handle the errors 
       return;
    }
