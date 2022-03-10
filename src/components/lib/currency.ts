export const toCurrency = (amount: number, currency: string) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    enum currencyValues {
        "thousand" = 2,
        "million" = 3,
        "billion" = 4,
        "trillion" = 5,
    }
    const value = formatter.format(amount);
    const valArray = value.split(",");
    return `${valArray[0]}${currencyValues[valArray.length]}`
}