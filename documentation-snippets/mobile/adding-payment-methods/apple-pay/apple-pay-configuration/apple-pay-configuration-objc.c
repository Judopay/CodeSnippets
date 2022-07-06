// This is how the JPApplePayConfiguration looks:
Array *mySummaryItems

JPApplePayConfiguration *applePayConfig;
applePayConfig = [[JPApplePayConfiguration alloc] initWithMerchantId:@"my-merchant-id"
		currency:@"GBP"                                                         
		countryCode:@"GB"   
		paymentSummaryItems:mySummaryItems
];
