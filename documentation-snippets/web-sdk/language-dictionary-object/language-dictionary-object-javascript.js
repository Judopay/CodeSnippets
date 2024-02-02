const exampleDictionary = {
    //This defines a new language so all keys must be provided
    it: {
        fieldLabels: {
            cardNumberLabel: 'Numero di carta',
            expiryDateLabel: 'Data di scadenza',
            cardVerificationCodeLabel: 'CVC',
            postCodeLabel: 'Post Codice',
            countryLabel: 'Paese',
            cardholderNameLabel: 'Nome del titolare'
        },
        fieldPlaceholders: {
            cardNumberPlaceholder: 'Numero di carta',
            expiryDatePlaceholder: 'MM / YY',
            cardVerificationCodePlaceholder: 'CVC',
            postCodePlaceholder: 'Post Codice',
            countryPlaceholder: 'Paese',
            cardholderNamePlaceholder: 'Nome del titolare'
        },
        //will translate countryList items from WebSDK version 0.0.39
        countryList: {
            uk: 'RU',
            usa: 'USA',
            canada: 'Canada',
            other: 'Altro'
        },
        errors: {
            onlyNumbersAllowed: 'Il numero della carta può contenere solo numeri',
            invalidCardNumber: 'Numero della carta non valido',
            cardTypeNotRecognized: 'Tipo di carta non riconosciuto, ricontrolla il tuo numero',
            cardTypeNotSupported: '{1} non è supportato', // from WebSDk version 0.0.39
            cardNumberRequired: 'Numero della carta richiesto',
            cardExpired: 'La carta è scaduta',
            invalidCardExpiryDate: 'La data di scadenza della carta non è valida',
            expiryDateRequired: 'Data di scadenza richiesta',
            codeTooShort: '{0} codice troppo corto per {1} scheda',
            codeTooLong: '{0} codice troppo lungo per {1} scheda',
            onlyNumbersAllowedInCode: '{0} il codice può contenere solo numeri',
            codeRequired: '{0} codice richiesto per {1} scheda',
            invalidPostCode: 'Il codice postale/postale non è valido',
            generic: 'Mi dispiace, si è verificato un errore, non ti è stato addebitato.',
            cardHolderNameRequired: 'È richiesto il nome del titolare della carta',
            cardHolderNameTooShort: 'Il nome del titolare della carta non può essere inferiore a 4 caratteri',
            cardHolderNameSpecialChars:
                'Il nome del titolare della carta non può contenere numeri o caratteri speciali'
        }
    },

    //This defines an already existing language
    //Not all keys are required, but those that are will override the SDK's values
    en: {
        fieldLabels: {
            cardNumberLabel: 'Credit Card Number',
            expiryDateLabel: 'Expiration Date',
            cardVerificationCodeLabel: 'CVC'
        },
        fieldPlaceholders: {
            cardNumberPlaceholder: 'xxxx xxxx xxxx xxxx',
            expiryDatePlaceholder: 'MM / YY ',
            cardVerificationCodePlaceholder: 'xxx'
        },
        errors: {
            generic: 'Sorry, an error has occurred.',
            cardHolderNameRequired: 'Please enter a cardholder name',
            cardHolderNameTooShort: "Card Name can't be less than 4 characters",
            cardHolderNameSpecialChars: "Card Name can't contain numbers or special characters"
        }
    }
}
