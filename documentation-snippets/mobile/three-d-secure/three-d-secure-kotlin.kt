//Add and populate billingAddress and emailAddress to the payment configuration object:

val judo = Judo.Builder(PaymentWidgetType.CARD_PAYMENT)
            //...
            // sets whether 3DS 2.0 UI request billing information should be enabled or disabled
            .set3DS2Enabled(true)

            // sets the value for challenge request indicator,
            // possible values:
            // ChallengeRequestIndicator.NO_PREFERENCE
            // ChallengeRequestIndicator.NO_CHALLENGE
            // ChallengeRequestIndicator.CHALLENGE_PREFERRED
            // ChallengeRequestIndicator.CHALLENGE_AS_MANDATE
            .setChallengeRequestIndicator(ChallengeRequestIndicator.NO_PREFERENCE)

            // sets the value for SCA exemption,
            // possible values:
            // ScaExemption.LOW_VALUE
            // ScaExemption.SECURE_CORPORATE
            // ScaExemption.TRUSTED_BENEFICIARY
            // ScaExemption.TRANSACTION_RISK_ANALYSIS
            .setScaExemption(ScaExemption.LOW_VALUE)

            // email address
            .setEmailAddress("email@me.com")

            // sets the maximum timeout for 3DS 2.0 transactions in minutes
            .setThreeDSTwoMaxTimeout(30)

            // sets phone number country code
            .setPhoneCountryCode("44")

            // phone number
            .setMobileNumber("11223344556677")

            // ...
            .build()
 

//Or, to request this information from your customer, enable the billingAddress and emailAddress fields to appear in the UI:
//In the code snippet:
set3DS2Enabled = true
