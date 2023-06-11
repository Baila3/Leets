var swapPairs = function(head) {
  if (head.length == 1 || head.length % 2 != 0 ) {
    return head
  }
  let x = 1
  const loopLength = head.length + 1
  while (x < loopLength) {
    head.splice(x - 1, 0, head.splice(x, 1)[0]);
    x = x + 2;
  }
  return head
};

console.log(swapPairs([1,2,3]))