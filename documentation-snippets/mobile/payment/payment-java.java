//invoke a payment with React Native SDK
//The method for making a transaction and configuring the flow:
async invokeTransaction(
    type: JudoTransactionType,
    configuration: JudoConfiguration
): Promise<JudoResponse>

//Make a payment
import { ..., JudoPay, JudoTransactionType, ... } from 'judo-react-native'
    const judo = new JudoPay('token', 'secret')
        judo.isSandboxed = true
    judo.invokeTransaction(JudoTransactionType.Payment, configuration)
        .then((response) => {/* Handle response */})
        .catch((error) => {/* Handle error */})
