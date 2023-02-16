/**1 */
let x = prompt('Введіть число, яке потрібно піднести до степеню:');
let с = prompt('Введіть степінь, до якої бажаєте піднести число:');
function pow(x, с) {
    let result = x;

    for (let i = 1; i < с; i++) {
        result *= x;
    }

    return result;
}

if (с < 1) {
    alert(`Ступінь ${с} невірна,введіть натуральне число`);
} else {
    alert(pow(x, с));
}

/**2 */

let a = prompt('Введіть перше число:');
let b = prompt('Введіть друге число:');
function NSD(a, b) {
    if (b > a) return NSD(b, a);
    if (!b) return a;
    return NSD(b, a % b);
}
alert(NSD(a, b));

/**3 */
let userNumber = prompt('Введіть число:');
function hightNumber(userNumber) {
    let someNumber = userNumber % 10;
    if (userNumber < 0) {
        alert('Введіть додатнє число!');
    } else {
        return (userNumber == 0) ? 0 : Math.max(someNumber, hightNumber((userNumber - someNumber) * 1e-1));
    }
}
alert(`Найбільша цифра у ${userNumber} це ${hightNumber(userNumber)}`);


/**4 */

function simple(n, i) {
    if (n < 0) {
        alert('Введіть додатнє число!');
    }
    if (n <= 2)
        return (n == 2) ? true : false;
    if (n % i == 0)
        return false;
    if (i * i > n)
        return true;

    return simple(n, i + 1);
}

let n = Number(prompt('Введіть додатнє число:'));

if (simple(n, 2))
    alert('Число просте');

else
    alert('Число не просте');

/**5 */

function factors(USERNUMBER, i) {
    if (USERNUMBER <= 0) {
        alert('Ви ввели невірне число!')
    }
    if (i <= USERNUMBER) {
        if (USERNUMBER % i == 0) {
            console.log(i + " ");
        }
        factors(USERNUMBER, i + 1);
    }
}

const USERNUMBER = Number(prompt('Введіть додатнє число!'));
factors(USERNUMBER, 1);


/**6 */
function fibonacci(num) {
    return (num < 2) ? num : fibonacci(num - 1) + fibonacci(num - 2)
}
const nTerms = prompt('Введіть кількість термінів ряду Фібоначчі!');

if (nTerms <= 0) {
    alert('Введіть додатнє число!!!');
}
else {
    for (let i = 0; i < nTerms; i++) {
        console.log(fibonacci(i));
    }
}