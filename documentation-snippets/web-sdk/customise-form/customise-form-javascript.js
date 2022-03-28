//Example Passing your configuration into createCardDetails
var styleOptions = {
    iframe {
        ...
    }
}
var judo = new JudoPay('Your Token', true);
var paymentFrame = judo.createCardDetails('', styleOptions)
