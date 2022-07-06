//Set the billing and shipping properties:
applePayConfig.requiredBillingContactFields = ContactFieldName | ContactFieldEmail;
applePayConfig.requiredShippingContactFields = ContactFieldAll;

//Set the shipping type:
applePayConfig.shippingType = ShippingTypeDelivery;

//Set an array of paymentShippingMethod objects:
NSDecimalNumber *deliveryCost = [NSDecimalNumber decimalNumberWithString:@"25.0"];

PaymentShippingMethod *delivery;
delivery = [[PaymentShippingMethod alloc] initWithIdentifier:@"delivery"                  
detail:@"Deliver to your address"                                                       
        label:@"Delivery"                                                      
        amount:deliveryCost];
applePayConfig.shippingMethods = @[delivery];
