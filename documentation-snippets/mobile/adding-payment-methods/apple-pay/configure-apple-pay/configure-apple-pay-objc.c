//To set all the Apple Pay required parameters, use the JPApplePayConfiguration:

NSDecimalNumber *itemOnePrice = [NSDecimalNumber decimalNumberWithString:@"649.99"];
NSDecimalNumber *itemTwoPrice = [NSDecimalNumber decimalNumberWithString:@"55.00"];
NSDecimalNumber *totalPrice = [NSDecimalNumber decimalNumberWithString:@"704.99"];

NSArray *mySummaryItems = @[  
    [JPPaymentSummaryItem itemWithLabel:@"iPhone XR 254GB" amount:itemOnePrice],  
    [JPPaymentSummaryItem itemWithLabel:@"iPhone XR Case" amount:itemTwoPrice],  
    [JPPaymentSummaryItem itemWithLabel:@"Apple Store" amount:totalPrice],
];
