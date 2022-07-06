//An example of the JudoCardNetwork:
enum JudoCardNetwork {
    Visa = 1 << 0,
    Mastercard = 1 << 1,
    Maestro = 1 << 2,
    Amex = 1 << 3,
    ChinaUnionPay = 1 << 4,
    JCB = 1 << 5,
    Discover = 1 << 6,
    DinersClub = 1 << 7,
    All = 1 << 8,
}
