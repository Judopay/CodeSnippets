//React Native

//Example of a Google Pay™ transaction:
import { ..., JudoTransactionMode, ... } from 'judo-react-native' 
judo.invokeGooglePay(JudoTransactionMode.Payment, configuration)   
.then((response) => {/* Handle response */})   
.catch((error) => {/* Handle error */})
