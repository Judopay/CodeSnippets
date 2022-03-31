//React Native
//Set the cardAddress parameter in the JudoConfiguration object:

const myCardAddress: JudoAddress = {
  line1: 'My Example Street 42',
  postCode: 'EX4 MPL3',
  town: 'Example Town',
  countryCode: 'GB',
}

const configuration: JudoConfiguration = {
  ...
  cardAddress: myCardAddress
  ...
}
