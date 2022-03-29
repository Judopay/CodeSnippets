//invoke a payment with React Native SDK
//The method for making a transaction and configuring the flow:
async invokeTransaction(
    type: JudoTransactionType,
    configuration: JudoConfiguration
): Promise<JudoResponse>
