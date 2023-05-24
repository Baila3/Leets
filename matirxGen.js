/**
 * @param {number} n
 * @return {number[][]}
 */
// var generateMatrix = function(n) {
//   const range = n * n;
//   const bigMatrix = [];
//   const smallMatrix = [];
//   i = 1;
//   // while (i < n + 1 ) {
//   //     // smallMatrix.push(i)
//   //     bigMatrix.push([]);
//   //     i++;
//   // }
//   while (i < range + 1) {
//     smallMatrix.push(i)
//     // bigMatrix.push([]);
//     i++;
// }

//   // console.log(bigMatrix);
//   console.log(smallMatrix)
// };

// generateMatrix(3);

// const mergeList = function(list1,list2) {
//   // if (list1.length === 0 && list2.length === 0) {
//   //   return []
//   // } else if (list1.length === 0) {
//   //   return list2
//   // } else if (list2.length === 0) {
//   //   return list1
//   // }
//   list1.push(...list2)
//   console.log(list1.sort())
 
// }

// mergeList([],[])

var isValid = function(s) {
  const newStr = s.split(" ").join("").split("");
  console.log(newStr)
  for (const parent of newStr) {
    let index = newStr.indexOf(parent);
    if (parent === "(" && (newStr[index + 1] === "}" || newStr[index + 1] === "]")) {
      console.log(false, "1")
    }
    if (parent === "[" && (newStr[index + 1] === "}" || newStr[index + 1] === ")")) {
      console.log(parent)
      console.log(false, "2")
    }
    if (parent === "{" && (newStr[index + 1] === ")" || newStr[index + 1] === "]")) {
      console.log(false, "3")
    }
    
    console.log(true)
  }
  
};

isValid("() () (]]] { {}")