const fibonacci = function (value) {
  n = Number(value);
  if (n < 0) {
    return "OOPS"; // 对于非正整数，返回错误提示
  }
  if (n === 0) {
    return 0;
  }

  let a = 1,
    b = 1;

  if (n === 1 || n === 2) {
    return 1; // 如果是第1项或第2项，直接返回1
  }

  for (let i = 3; i <= n; i++) {
    let temp = a + b; // 每次都计算前两项的和
    a = b; // 更新a为前一项
    b = temp; // 更新b为当前项
  }

  return b; // 返回第n项的值
};

// Do not edit below this line
module.exports = fibonacci;
