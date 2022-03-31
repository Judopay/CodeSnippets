//iOS
//Set the primaryAccountDetails property of the JPConfiguration object:

JPPrimaryAccountDetails *accountDetails;
accountDetails = [JPPrimaryAccountDetails new];

    accountDetails.name = @"example-name";
    accountDetails.accountNumber = @"example-number";
    accountDetails.dateOfBirth = @"example-date";
    accountDetails.postCode = @"example-post-code";

configuration.primaryAccountDetails = accountDetails;
