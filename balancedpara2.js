function isBalanced(str) {
    const stack = [];
    const open = '({[';
    const close = ')}]';
    
    for (let i = 0; i < str.length; i++) {
      if (open.includes(str[i])) {
        stack.push(str[i]);
      } else if (close.includes(str[i])) {
        const lastIndex = stack.length - 1;
        const lastParen = stack[lastIndex];
        const correspondingOpen = open[close.indexOf(str[i])];
        if (lastParen === correspondingOpen) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    
    return stack.length === 0;
  }
  
  console.log(isBalanced("()")); // true
  console.log(isBalanced("()[]{}")); // true
  console.log(isBalanced("()[]")); // false
  console.log(isBalanced("([)]")); // false
  console.log(isBalanced("{(a+b)*p}[(c-d]"));//false
  