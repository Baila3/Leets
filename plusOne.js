var plusOne = function(digits) {
    let digo = String(digits.join(""))
    const newNum = BigInt(digo)
    console.log(newNum + 1)
    const newArr = Array.from(String(newNum), Number)
    return newArr
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))