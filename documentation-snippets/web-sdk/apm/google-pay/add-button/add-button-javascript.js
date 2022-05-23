//Display the Google Pay Button:
const button = judo.digitalWallets.getGooglePayButton()

//Add the Google Pay Button to your page:
const container = document.getElementById('button-container')
  container.append(button)
