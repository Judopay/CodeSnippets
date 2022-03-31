//Configure the JPApplePayConfiguration object

//From the JPConfiguration already created, call:

[self.judoKitSession invokePaymentMethodScreenWithMode:TransactionModePayment     
        configuration:configuration                                            
        completion:^(JPResponse *response, NSError *error) {
// Handle the response and error
}];
