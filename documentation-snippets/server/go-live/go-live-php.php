//In the Judopay object change the production environment setting from false to true: 'useProduction' => true

$judopay = new \Judopay(    
array(       
    'apiToken' => 'your-token,       
    'apiSecret' => 'your-secret',        
    'judoId' => 'your-judo-id',    
    
    //Set to true on production, defaults to false which is the sandbox  
      
    'useProduction' => true    )
);
