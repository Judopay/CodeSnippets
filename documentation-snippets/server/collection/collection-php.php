// Create an instance of the Collection model
$collection = $judopay->getModel('Collection');

// Prepare the attributes
$attributes = [
    'receiptId' => 'yourPreauthReceiptId',
    'yourPaymentReference' => 'yourPreauthPaymentReference',
    'amount' => 0.49
];

try {
    // Set attributes and send the request to Judopay
    $collection->setAttributeValues($attributes);
    $response = $collection->create();  
} 
catch (\Exception $e) {
    return;
}
