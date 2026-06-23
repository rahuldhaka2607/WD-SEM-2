function findFactorial() {
    let n = parseInt(document.getElementById("num").value);
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i;
    }

    document.getElementById("result").innerHTML =
        "Factorial of " + n + " is " + fact;
}