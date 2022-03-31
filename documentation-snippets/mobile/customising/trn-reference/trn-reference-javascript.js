//React Native complete configuration example:
import { JudoAmount, JudoReference, JudoConfiguration } from 'judo-react-native'
    const amount: JudoAmount = {
        value: '1.00',
        currency: 'GBP',
        }
    const reference: JudoReference = {
    consumerReference: 'myConsumerReference',
    paymentReference: 'myPaymentReference',
    metadata: {
        'metadatakey': 'metadataValue',
        'metadatakey2': 'metadataValue',
            }
        }
    const configuration: JudoConfiguration = {
        judoId: 'my-judo-id',
        amount: amount,
        reference: reference,
}
