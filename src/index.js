module.exports = function check(str, bracketsConfig) {
  let brackets = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length > 0) {
      let openBracket = stack.pop();
      if (brackets[openBracket] == str[i]) {
        continue
      }
      stack.push(openBracket);
    }
    if (brackets[str[i]]) {
      stack.push(str[i]);
    } else {
      return false;
    }
  }
  return stack.length == 0;
}
