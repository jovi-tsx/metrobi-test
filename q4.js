/**
 * @param {string} str - String with opened and closed brackets.
 */

function properlyClosedBrackets(str) {
  const stack = [];
  const bracketPairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of str) {
    switch (char) {
      case '(':
      case '{':
      case '[':
        stack.push(char);
        break;
      case ')':
      case '}':
      case ']':
        if (stack.length === 0 || stack.pop() !== bracketPairs[char])
          return false;
        break;
    }
  }

  return stack.length === 0;
}

console.log(properlyClosedBrackets('{[]}')); // true
console.log(properlyClosedBrackets('(){}[]')); // true
console.log(properlyClosedBrackets('({[]})')); // true
console.log(properlyClosedBrackets('{(])}')); // false
console.log(properlyClosedBrackets('{([)]}')); // false
console.log(properlyClosedBrackets('({[}])')); // false
