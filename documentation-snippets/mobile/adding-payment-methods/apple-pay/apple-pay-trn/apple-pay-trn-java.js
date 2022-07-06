//An example of an Apple Pay transaction:
import { ..., JudoTransactionMode, ... } from 'judo-react-native'

// Describing the purchased items
const itemOne: JudoPaymentSummaryItem = {    
	label: 'Apple iPhone XR',    
	amount: '699.95',
}
const itemTwo: JudoPaymentSummaryItem = {    
	label: 'Apple Leather Case',    
	amount: '55.50',
}
const total: JudoPaymentSummaryItem = {    
	label: 'Tim Apple',    
	amount: '755.45',
}
// Describe the shipping method
const delivery: JudoShippingMethod = {    
	identifier: 'delivery-id',    
	label: 'Delivery',    
	detail: 'Deliver to your home address',    
	amount: '15.0',
}
