//To display Apple Pay in the Payments Widget

//Add the applePayConfiguration property to the JudoConfiguration instance:
const configuration: JudoConfiguration = { 
    judoId: 'my-judo-id',    
    amount: amount,    
    reference: reference,    
    applePayConfiguration: applePayConfiguration,
}

//Call the ApplePay method and handle the response:
import { ..., JudoTransactionMode, ... } from 'judo-react-native'
judo.invokeApplePay(JudoTransactionMode.Payment, configuration)
.then((response) => {/* Handle response */})
.catch((error) => {/* Handle error */})
