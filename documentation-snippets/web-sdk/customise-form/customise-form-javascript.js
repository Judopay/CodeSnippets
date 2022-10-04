const iframeConfiguration = {
    iframe {
        ...
   }
}

var judo = new JudoPay("yourAPIToken", true);
var payment = judo.createCardDetails("payment-iframe", iframeConfiguration);
