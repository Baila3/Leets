/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = s.split('')
    let newA = 0;
    let integer = 0;
    for (let i = 0; i < romans.length; i++) {
        if (i === "I" && romans[romans.indexOf(i) + 1] != "V" || romans[romans.indexOf(i) + 1] != "X") {
            integer += 1
            romans.shift()
        } else if (i === "I" && romans[romans.indexOf(i) + 1] === "V") {
            integer += 4
            romans.shift()
            romans.shift()
        } else if (i === "I" && romans[romans.indexOf(i) + 1] === "X") {
            integer += 9
            romans.shift()
            romans.shift()
        } else if (i === "V") {
            integer += 5
            romans.shift()
        } else if (i === "X" && romans[romans.indexOf(i) + 1] != "L" || romans[romans.indexOf(i) + 1] != "C") {
            integer += 10
            romans.shift()
        } else if (i === "X" && romans[romans.indexOf(i) + 1] === "L") {
            integer += 40
            romans.shift()
            romans.shift()
        } else if (i === "X" && romans[romans.indexOf(i) + 1] === "C") {
            integer += 90
            romans.shift()
            romans.shift()
        } else if (i === "L") {
            integer += 50
            romans.shift()
        } else if (i === "C" && romans[romans.indexOf(i) + 1] != "D" || romans[romans.indexOf(i) + 1] != "M") {
            integer += 100
            romans.shift()
        } else if (i === "C" && romans[romans.indexOf(i) + 1] != "D") {
            integer += 400
            romans.shift()
            romans.shift()
        } else if (i === "C" && romans[romans.indexOf(i) + 1] === "M") {
            integer += 900
            romans.shift()
            romans.shift()
        } else if (i === "D") {
            integer += 500
            romans.shift()
        } else if (i === "M") {
            integer += 1000
            romans.shift()
        }
        console.log(romans)
    }
    return integer
};