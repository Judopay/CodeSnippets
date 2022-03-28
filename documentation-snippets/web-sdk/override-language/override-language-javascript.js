var customStyle = {
    iframe1 : {
        language : "en",
        customLanguages : [
        {
                "en" : {
                    fieldLabels: {
                        cardNumberLabel: "Credit Card Number",
                        expiryDateLabel: "Expiration Date",
                        cardVerificationCodeLabel: "CVC"
                    },
                    fieldPlaceholders: {
                        cardNumberPlaceholder: "xxxx xxxx xxxx xxxx",
                        expiryDatePlaceholder: "MM / YY ",
                        cardVerificationCodePlaceholder: "xxx"
                    },
                    errors : {
                        0: "Card number must be numeric",
                        1: "Card number not valid",
                        2: "Card type not recognised",
                        3: "Card number required",
                        4: "Card is expired",
                        5: "Invalid expiry date",
                        6: "Expiry date required",
                        7: "{0} code too short",
                        8: "{0} code too long",
                        9: "{0} code must be numeric",
                        10: "{0} code required"
                    }
                }
            },
            {
                "ro" : {
                    fieldLabels: {
                        cardNumberLabel: "Număr de card",
                        expiryDateLabel: "Data Expirarii",
                        cardVerificationCodeLabel: "CVC"
                    },
                    fieldPlaceholders: {
                        cardNumberPlaceholder: "Număr de card",
                        expiryDatePlaceholder: "LL / AA ",
                        cardVerificationCodePlaceholder: "CVC"
                    },
                    errors : {
                        0: "Numărul cardului poate conține numai numere",
                        1: "Numărul cardului nu este valid",
                        2: "Tipul de card nu este recunoscut, verificați din nou numărul dvs",
                        3: "Numarul cardului este necesar",
                        4: "Cardul a expirat",
                        5: "Data expirării cardului nu este validă",
                        6: "Data expirării necesară",
                        7: "Codul {0} este prea scurt pentru cartea de {1}",
                        8: "Codul {0} este prea lung pentru carte de {1}",
                        9: "Codul {0} poate conține numai numere",
                        10: "Codul {0} necesar pentru cartea de {1}"
                    }
                }
            }
    ],
        ...        
    }
};
