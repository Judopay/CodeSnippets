//The details of the configuration object needs to be set, including the card token credentials:
<script src="https://web.judopay.com/js/0.0.26/judopay.min.js"></script>

<script>
  window.addEventListener('load', (event) => {

    // Setup
    const judopay = new JudoPay();

    const config =  {
      isGeoLocationGatheringAllowed: true,
    };
    
    const paymentSession = "my-payment-session-here"

    judopay.createCardDetails('jupay-payment-iframe', config);

    const tokenConfiguration = {
        judoId: "youJudoId",
        amount: 12.99,
        currency: "GBP",
        phoneCountryCode: "44",
        mobileNumber: "07999999999",
        emailAddress: "contact@judopay.com",
        challengeRequestIndicator: "challengeAsMandate",
        scaExemption: "lowValue",
        initialRecurringPayment: false,
        yourConsumerReference: "yourConsumerReference",
        yourPaymentReference: "yourPaymentReference",
        billingAddress: {
                  address1: "My House",
                  address2: "My Street",
                  town: "My Town",
                  country: "GB",
                  postcode: "TR14 8PA",
                  countryCode: 826,
                  state: "FL"
        },   

      //
      // token specific params
      cardToken: "yourCardToken", 
      cardHolderName: "John Doe", // Mandatory
      shouldVerifySecurityCode: true
    }

    const onTokenPaymentClick = () => {
      judopay.invokeTokenPayment(paymentSession, tokenConfiguration).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    };

    const onTokenPreAuthClick = () => {
      judopay.invokeTokenPreAuth(paymentSession, tokenConfiguration).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    };

      // Here you can customise the Security Code (CVV/CV2) modal styles
      //       const securityCodeModalStyle = {
      //         labelTextContent: 'Security code',
      //         inputPlaceholder: 'Type your code here',
      //         buttonTextContent: 'Submit',
      //         style: {
      //             form: {
      //                 padding: '20px 16px',
      //                 maxWidth: '300px',
      //                 margin: 'auto',
      //                 width: '80%',
      //                 borderRadius: '4px'
      //             },
      //             field: {
      //                 width: '100%',
      //                 padding: '8px',
      //                 color: '#999999'
      //             },
      //             label: {
      //                 width: '100%',
      //                 padding: '8px 0px 8px 0px',
      //                 color: '#999999'
      //             },
      //             button: {
      //                 backgroundColor: '#222',
      //                 borderRadius: '4px',
      //                 borderStyle: 'none',
      //             }
      //         }
      // }
      // judopay.invokeTokenPayment(paymentSession, tokenConfiguration, securityCodeModalStyle)
      // or
      // judopay.invokeTokenPreAuth(paymentSession, tokenConfiguration, securityCodeModalStyle)


    document.getElementById('token-payment-button').addEventListener('click', onTokenPaymentClick);
    document.getElementById('token-pre-auth-button').addEventListener('click', onTokenPreAuthClick);
  });
</script>
