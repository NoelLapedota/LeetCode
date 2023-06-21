
function removeSubstringLength(string) {
    let stack = [];
    let string = string.touppercase();
    for (let char of string) {
      if ((char === 'A' && stack[stack.length - 1] === 'B') || (char === 'C' && stack[stack.length - 1] === 'D')) {
        stack.pop(); // remove the previous character from the stack
      } else {
        stack.push(char); // add the current character to the stack
      }
    }
    return stack.length;
  }
  
  // Example usage:
  const s1 = "ABFCACDB";
  console.log(removeSubstringLength(s1)); // Output: 2
  
  const s2 = "ACBBD";
  console.log(removeSubstringLength(s2)); // Output: 5
  