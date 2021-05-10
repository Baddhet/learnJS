function braketsIssue() {
  const OPEN_BRECKETS = ['(', '{'];
  const BRECKETS_PAIR = {
    [')']: '(',
    ['}']: '{',
  };

  function isBraketsOk(str) {
    let stack = [];

    for (let i = 0; i < str.length; i++) {
      let currentSimbol = str[i];

      if (OPEN_BRECKETS.includes(currentSimbol)) {
        stack.push(currentSimbol);
      } else {
        if (stack.length === 0) {
          return false;
        }
        let topElement = stack[stack.length - 1];

        if (BRECKETS_PAIR[currentSimbol] === topElement) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  isBraketsOk('()()()');
}
braketsIssue();