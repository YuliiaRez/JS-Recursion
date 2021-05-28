/*1. Реализовать возведение в целую степень. (pow(base, exponent) => base**exponent, 
где base любое число, exponent - натуральное (1, 2, 3) или * целое число(-2, -1, 0, 1, 2)).*/


let getExpon = (base, exp) => exp === 1 ? base : base * getExpon(base, exp - 1);
console.log(`${getExpon(4, 2)} результат возведения в степень `);


//2. Реализовать вывод в консоль скобок (// bracketWrapper3(3); // => сразу в консоль)

/**** Наверное неправильно, но лучше пока ничего не придумалось(( */
function bracketWrapper3(n) {
    console.log(bracketWrapper(n));
}
function bracketWrapper(n) {
    return n === 1 ? '()' : `(${bracketWrapper(n - 1)})`;
}


bracketWrapper3(5);













