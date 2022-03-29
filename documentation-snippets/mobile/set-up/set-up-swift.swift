//Add your app’s sandbox token and secret to your Judo instance in your Xamarin Forms page

var judo = new Judo
{
    JudoId = "<JUDO_ID>",
    Token = "<API_TOKEN>",
    Secret = "<API_SECRET>",
    Environment = JudoEnvironment.Sandbox,
    Amount = 1.50m,
    Currency = "GBP",
    ConsumerReference = "YourUniqueReference"
};
