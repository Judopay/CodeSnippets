//iOS
//To access the JudoKit class, import the JudoKitObjC  framework:
#import <JudoKitObjC/JudoKitObjC.h>

//To initialise a JudoKit session:
//Use either a basic (token:secret) authentication method: 
JPBasicAuthorization *authorization = [JPBasicAuthorization authorizationWithToken:

//or a paymentsession (token & session) authentication method:
JPSessionAuthorization *authorization = [JPSessionAuthorization authorizationWithToken:
                                         
//To create a JudoKit session:
JudoKit *judo = [[JudoKit alloc] initWithAuthorization:authorization];

//To communicate with the sandbox environment enter:
judo.isSandboxed = YES;
