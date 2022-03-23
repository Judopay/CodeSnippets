//In:
JudoPaymentsFactory.Create 
//method, change the environment from Sandbox to Live:

var client = JudoPaymentsFactory.Create(JudoEnvironment.Live, "YOUR_API_TOKEN", "YOUR_API_SECRET");
