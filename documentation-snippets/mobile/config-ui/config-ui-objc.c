//An example of the JPUIConfiguration object:

JPUIConfiguration *uiConfig = [JPUIConfiguration new];
    uiConfig.shouldPaymentMethodsDisplayAmount = NO;
    uiConfig.shouldPaymentButtonDisplayAmount: = NO;
    uiConfig.isAVSEnabled = YES;
    uiConfig.shouldPaymentMethodsVerifySecurityCode = YES;

configuration.uiConfiguration = uiConfig;

//The JPUIConfiguration instance is set as part of the JPConfiguration object that is passed to our transactions
