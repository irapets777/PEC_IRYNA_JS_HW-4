// /**1 */
// let x = prompt('Введіть число, яке потрібно піднести до степеню:');
// let n = prompt('Введіть степінь, до якої бажаєте піднести число:');
// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// if (n < 1) {
//     alert(`Ступінь ${n} невірна,введіть натуральне число`);
// } else {
//     alert(pow(x, n));
// }

// /**2 */

// let a = prompt('Введіть перше число:');
// let b = prompt('Введіть друге число:');
// function NSD (a, b) {
//     if (b > a) return NSD (b, a);
//     if (!b) return a;
//     return NSD (b, a % b);
// }
//  alert(NSD(a, b));

/**3 */
let userNumber = prompt ('Введіть число:');
function hightNumber (userNumber){
   let someNumber = userNumber % 10;
   if (userNumber < 0) {
    alert ('Введіть додатнє число!');
   } else {
    return (userNumber == 0) ? 0 : Math.max(someNumber, hightNumber((userNumber - someNumber) * 1e-1));
   }
}
alert(`Найбільша цифра у ${userNumber} це ${hightNumber(userNumber )}`);

