var iterations = 0;
function fib(n) {
  iterations++;
  if(n == 1 || n == 2) return 1;
  return fib(n-1) + fib(n-2);
}

function fastFib(n) {
  var memo = {1: 1, 2: 1};
  function fibCalc(n) {
    iterations++;
    if(!memo[n]) memo[n] = fibCalc(n-1) + fibCalc(n-2);
    return memo[n];
  }

  return fibCalc(n);
}

var output = "fib(10) = " + fib(10) + " in " + iterations + " iterations<br>";
iterations = 0;
output += "fastFib(10) = " + fastFib(10) + " in " + iterations + " iterations";

output
