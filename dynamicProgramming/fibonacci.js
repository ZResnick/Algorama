const fibonacci = n => {
  let fib = [0, 1];
  for (let i = 1; i < n; i++) {
    let temp = fib[0] + fib[1];
    fib = [fib[1], temp];
  }
  return fib[1];
};

console.log(fibonacci(50));
