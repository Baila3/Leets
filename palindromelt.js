var isPalindrome = function(x) {
  if (x < 0) {
      return false
  }
  const number = Array.from(String(x), Number)

      if (JSON.stringify(number) === JSON.stringify(number.reverse())) {
          return true
      } else {
          return false
      }
  
};
