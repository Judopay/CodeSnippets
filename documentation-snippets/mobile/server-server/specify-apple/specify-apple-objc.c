//iOS
//Specify an Apple Pay™ transaction:

[self.judoKitSession invokeApplePayWithMode:TransactionModeServerToServer
            configuration:configuration
            completion:^(JPResponse *response, NSError *error) {
    // Handle the payment token returned from the response
}];
