//Change the paymentMethods property to the JudoPaymentMethod value in the JudoConfiguration instance:
//An example of the JudoPaymentMethod:

enum JudoPaymentMethod {
    Card = 1 << 0,
    ApplePay = 1 << 1,
    GooglePay = 1 << 2,
    iDEAL = 1 << 3,
    All = 1 << 4,
}
