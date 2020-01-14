const stringify = num => {
  let string = String(num);
  let withCommas = '';
  for (let i = string.length - 1; i >= 0; i--) {
    if ((string.length - i) % 3 === 0 && i !== 0) {
      withCommas += `${string[i]},`;
    } else {
      withCommas += string[i];
    }
  }
  return withCommas
    .split('')
    .reverse()
    .join('');
};

console.log('12,345,678', stringify(12345678));
console.log('123,456,789', stringify(123456789));
console.log('345,756,543,789', stringify(345756543789));
