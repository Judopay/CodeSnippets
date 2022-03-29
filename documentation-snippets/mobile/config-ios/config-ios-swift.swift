//Add the following in your AppDelegate.cs after the LoadApplication(new App()) method call in your FinishedLaunching method:
DependencyService.Register<ClientService>();
DependencyService.Register<HttpClientHelper>();

// Required if using Apple Pay
DependencyService.Register<ApplePayService>();
