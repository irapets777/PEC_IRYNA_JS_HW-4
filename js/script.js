let x = prompt('Введіть число, яке потрібно піднести до степеню:');
let n = prompt('Введіть степінь, до якої бажаєте піднести число:');
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

if (n < 1) {
    alert(`Ступінь ${n} невірна,введіть натуральне число`);
} else {
    alert(pow(x, n));
}