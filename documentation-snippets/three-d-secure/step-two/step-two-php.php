// (1) Send the 3D Secure 2 payment:

 try
    {
        $cardPayment->setAttributeValues($attributes);
        $response = $cardPayment->create();
    } catch (\Exception $e) {
        return;
    }
