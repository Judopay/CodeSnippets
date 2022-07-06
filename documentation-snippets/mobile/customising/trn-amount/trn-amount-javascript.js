//From the imported JudoAmount interface:

interface JudoAmount {
    value: string,
    currency: string,
}

//Create a new variable that implements the JudoAmount interface
//Add the variable to the configuration object:

const amount: JudoAmount = {
  value: '999.99',
  currency: 'GBP'
}
