//React Native using the payments widget
//Create a JudoPBBAConfiguration:

export interface JudoPBBAConfiguration {
  mobileNumber?: string
  emailAddress?: string
  appearsOnStatement?: string
  deeplinkScheme?: string
  deeplinkURL?: string
}
 
 //With the JudoPBBAConfiguration set, pass it to the main JudoConfiguration:

const pbbaConfig: JudoPBBAConfiguration = {
  mobileNumber: "myMobileNumber",
  emailAddress: "myEmailAddress",
  appearsOnStatement: "myStatement",
  deeplinkScheme: 'my://app'
  }
 const config: JudoConfiguration = {
 ...
 pbbaConfiguration: pbbaConfig
 ...
}

//Call the invokePayByBankApp method

//Handle the response:

try {
const judo = new JudoPay(token, secret)
const response = await judo.invokePayByBankApp(config)
// Handle response
} catch (exception) {
// Handle exception
}
