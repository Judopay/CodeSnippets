
//An example of a package.json file with the Judopay SDK dependency:
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
   ...
  },
  "dependencies": {
   "judo-react-native": "^2.1.0",
   ...
       },
  "devDependencies": {
    ...
  }
}

//To run the Judopay React Native SDK
//Import the JudoPay class from the judo-react-native package

  import JudoPay from 'judo-react-native'

//Provide your token and secret
  const judoPay = new JudoPay('my-token', 'my-secret')

//Set the SDK in sandbox mode

  judoPay.isSandboxed = true
