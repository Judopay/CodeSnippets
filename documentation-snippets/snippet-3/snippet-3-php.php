<?php

header('Content-Type: application/json');

$userEncode = base64_encode("{{yourAPIToken}}".":"."{{yourAPISecret}}");

$data = array(        
    'judoId' => "{{yourJudoID}}",        
    'amount' => "{{amount}}",        
    'currency' => "{{currency}}",        
    'yourConsumerReference' => "{{yourConsumerReference}}",        
    'yourPaymentReference' => "{{yourUniquePaymentReference}}");

$dataJson = json_encode($data);
$headers = array( 
    'Content-Type:application/json',  
    'Authorization: Basic '.$userEncode,  
    'API-Version: 6.2'
);

$environment = "https://api.judopay.com/webpayments/payments";
$response = "";
$ch = 
curl_init($environment);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FRESH_CONNECT, TRUE);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS,$dataJson);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
$response = curl_exec($ch);
echo $response;
?>
