//Set the details of the configuration object:
const configuration = {      
  style: { color: 'blue', height: 34 },      
	merchantId : 'yourPaypalMerchantId',                           
	amount: '12.99',        
	currency: 'GBP',      
	merchantPaymentReference: 'yourPaymentReference',       
	judoId: 'yourJudoId',                                   
	dynamicDescriptor: 'dynamicDescriptor',                                    
	paymentSession: 'yourPaymentSession',              
	consumer: {        
		merchantConsumerReference: 'yourConsumerReference',         
		firstName: 'John',                                                
		surname: 'Doe',                                                  
		emailAddress: 'example@domain.com'                                         
			},  
	billingAddress: {        
		address1: 'My House',           
		address2: 'My Street',                  
		town: 'My Town',                         
		country: 'My Country',            
		postcode: 'TR14 8PA',         
			},  
	shippingAddress: {        
		address1: 'My House',         
		address2: 'My Street',              
		town: 'My Town',                    
		country: 'My Country',          
		postcode: 'TR14 8PA',  
		},      
	onSuccess,       
	onError    
};
