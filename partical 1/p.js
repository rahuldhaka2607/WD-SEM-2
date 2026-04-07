function calculateSum() {
  let n = parseInt(document.getElementById("num").value);

  if (isNaN(n) || n <= 0) {
    document.getElementById("result").innerText = "Please enter a valid number!";
    return;
  }

  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  document.getElementById("result").innerText = "Sum from 1 to " + n + " = " + sum;
}