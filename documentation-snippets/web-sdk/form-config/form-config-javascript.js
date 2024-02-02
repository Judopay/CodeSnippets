const iFrameConfiguration = {
    isGeoLocationGatheringAllowed: true,
    iframe: {
        language: 'en',
        errorFieldId: 'judopay-errors',
        cardTypeIconRight: '-400px',
        cardTypeIconTop: '-50x',
        backgroundColor: '#EAECEF',
        showCardTypeIcons: true,
        layout: 'vertical',
        enabledPaymentMethods: ['CARD'],
        defaultCountryCode: 'US',
        isCountryAndPostcodeVisible: false,
        isCardHolderNameVisible: false,
        disableUnderline: true,
        errorsDisplay: 'HIDE_UNDER_FIELDS',
        shouldAutofocus: false,
        fonts: [
            {
                family: 'Roboto',
                src: 'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu72xKOzY.woff2',
                display: 'auto',
                style: 'normal',
                unicodeRange:
                  'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
                weight: '400'
            }
        ],
        styles: {
            default: {
                field: {
                    fontFamily: 'Roboto, sans-serif',
                    fontSize: '17px',
                    backgroundColor: '#e5e5e5',
                    borderTop: 'none',
                    borderRight: 'none',
                    borderLeft: 'none',
                    boxShadow: 'none',
                    margin: '-10px 0 -5px',
                    padding: '6px 0'
                },
                label: {
                    color: '#F77',
                    fontFamily: "'Roboto', sans-serif",
                    opacity: '0',
                    height: '15px',
                    fontSize: '8px',
                    display: 'inline-block',
                    transition: 'opacity 0.6s',
                    marginLeft: '5px',
                    position: 'relative',
                    bottom: '-10px',
                    zIndex: '100'
                }
            },
            focus: {
                field: {
                    backgroundColor: '#F0F0F0',
                    color: 'rgb(130, 130, 130)',
                    padding: '12px 6px 0',
                    fontSize: '16px'
                },
                label: {
                    opacity: '1',
                    color: 'rgb(130, 130, 130)'
                }
            },
            error: {
                field: {
                    backgroundColor: '#e5ecff',
                    padding: '12px 6px 0'
                },
                label: {
                    opacity: '1'
                }
            },
            valid: {
                field: {
                    backgroundColor: '#e5ffec',
                    color: 'green',
                    padding: '12px 6px 0'
                },
                label: {
                    color: 'green',
                    opacity: '1'
                }
            },
            customLanguages: {
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
        }
    }
}
