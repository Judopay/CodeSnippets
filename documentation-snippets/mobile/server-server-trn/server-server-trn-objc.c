//iOS
//To specify a server-to-server transaction:

//Set the TransactionMode to TransactionModeServerToServer when calling the Judopay methods:

[self.judoKitSession invokePaymentMethodScreenWithMode:TransactionModeServerToServer
                configuration:configuration
                completion:^(JPResponse *response, NSError *error) {
    // Handle the payment token returned from the response
}];
