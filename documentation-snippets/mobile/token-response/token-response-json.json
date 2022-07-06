try {
    const judo: Judo = new JudoPay('myToken', 'mySecret')
    const configuration: JudoConfiguration = {
        judoId: 'myJudoId',
        amount: amount,
        reference: reference
    }
    const response = await judo.performTokenTransaction(
        JudoTransactionMode.Payment,
        configuration,
        'myCardToken',
        )
// Handle response
    } catch (exception) {
// Handle exception
}
