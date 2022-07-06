//To configure the JPConfiguration object add your:

//JudoId
//Amount
//ConsumerReference

JPAmount *myAmount;
JPReference *myReference;
JPConfiguration *myConfiguration;

    myAmount = [[JPAmount alloc] initWithAmount:@"0.01"
                                   currency:@"GBP"];

    myReference = [[JPReference alloc] initWithConsumerReference:@"my-reference"];

    myConfiguration = [JPConfiguration alloc] initWithJudoID:@"my-judo-id"
                      amount:myAmount
                      reference:myReference];
