public async performTokenTransaction(
    mode: JudoTransactionMode,
    configuration: JudoConfiguration,
    cardToken: string,
    securityCode: string,
    cardholderName: string,
    cardScheme: string
): Promise<JudoResponse>;
