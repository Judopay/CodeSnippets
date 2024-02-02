<script>
  
    // ...Judopay WebSDK Setup...

    const config =  {
      isGeoLocationGatheringAllowed: true,
      iframe: {
          //...other iframe properties
          language: 'es'
        }
      }

    judopay.createCardDetails('judopay-payment-iframe', config);
</script>
