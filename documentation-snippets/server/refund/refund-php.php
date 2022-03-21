//Prepare the refund
$refund = $judopay->getModel('Refund');    
        $refundAttributes = [
        'amount' => 12.99,
        'receiptId' => $receiptId,
        'yourPaymentReference' => 'yourPaymentReference'
    ];    $refund->setAttributeValues($refundAttributes);

//Send the refund request to Judopay
try {
        $response = $refund->create();
        // Handle successful refund   
          return;
            } catch (\Exception $e) {
            echo $e->getMessage();
        // Handle the errors 
        return;
    }
