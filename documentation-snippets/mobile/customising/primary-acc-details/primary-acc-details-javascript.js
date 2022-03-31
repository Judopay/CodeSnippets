//React Native
//An example of the JudoAccountDetails interface:
interface JudoAccountDetails {
    name?: string,
    accountNumber?: string,
    dateOfBirth?: string,
    postCode?: string,
}
 

//To set the primary account details to be sent with the transaction:

const myAcccountDetails: JudoAccountDetails = {
  accountNumber: '4015434234',
  name: 'test-account-name',
}

const configuration: JudoConfiguration = {
  ...
  primaryAccountDetails: myAccountDetails,
  ...
}
