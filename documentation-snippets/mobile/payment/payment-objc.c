//iOS Make a trn
//Call the method and handling the response from the completion block:

[judo invokeTransactionWithType:TransactionTypePayment
                  configuration:configuration
                     completion:^(JPResponse *response, NSError *error) {

     // Handle response / error

}];
