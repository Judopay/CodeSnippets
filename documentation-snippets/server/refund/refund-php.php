//Prepare the refund
$refund = $judopay->getModel('Refund');    
        $refundAttributes = [
        'amount' => 1.10,
        'receiptId' => $receiptId,
        'yourPaymentReference' => 'qsdfg'
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
