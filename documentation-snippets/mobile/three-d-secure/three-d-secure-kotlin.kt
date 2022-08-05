val uiConfiguration = UiConfiguration.Builder()
            //...
            // sets whether 3DS 2.0 UI billing information screen should be presented to the user
            .setShouldAskForBillingInformation(true)
            .build()

// in case you don't want to present billing info screen to the user, you can set the address instead
val address = Address.Builder()
                    .setLine1("My house")
                    .setLine2("My street")
                    .setLine3("My area")
                    .setTown("My town")
                    .setPostCode("TR14 8PA")
                    .setCountryCode("826")
                    .build()

val judo = Judo.Builder(PaymentWidgetType.CARD_PAYMENT)
            //...
            .setUiConfiguration(uiConfiguration)

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

            // sets the maximum timeout for 3DS 2.0 transactions in seconds
            .setThreeDSTwoMaxTimeout(30)

            // sets phone number country code
            .setPhoneCountryCode("44")

            // phone number
            .setMobileNumber("11223344556677")

            // 
            .setAddress(address)
            
            // ...
            .build()
