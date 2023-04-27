/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romans = s.split('')
    let i = romans.length
    let integer = 0;
    for (const rom of romans) {
        let real = romans.indexOf(rom) + 1
        if (rom === "I" && (romans[romans.indexOf(rom) + 1] != "V" && romans[romans.indexOf(rom) + 1] != "X")) {
            console.log(1)
            integer += 1
            romans.splice(romans.indexOf(rom),1,0)
        } else if (rom  === "I" && romans[romans.indexOf(rom)  + 1] === "V") {
            console.log(4)
            integer += 4
            romans.splice(romans.indexOf(rom),1,0)
            romans.splice(real,1,0)
        } else if (rom  === "I" && romans[romans.indexOf(rom)  + 1] === "X") {
            console.log(9)
            integer += 9
            romans.splice(romans.indexOf(rom),1,0)
            romans.splice(real,1,0)
        } else if (rom  === "V") {
            console.log(5)
            integer += 5
            romans.splice(romans.indexOf(rom),1,0)
        } else if (rom  === "X" && (romans[romans.indexOf(rom)  + 1] != "L" && romans[romans.indexOf(rom)  + 1] != "C")) {
            console.log(10)
            integer += 10
            romans.splice(romans.indexOf(rom),1,0)
        } else if (rom === "X" && romans[romans.indexOf(rom)  + 1] === "L") {
            console.log(40)
            integer += 40
            romans.splice(romans.indexOf(rom),1,0)
            romans.splice(real,1,0)
        } else if (rom  === "X" && romans[romans.indexOf(rom)  + 1] === "C") {
            console.log(90)
            integer += 90
            romans.splice(romans.indexOf(rom),1,0)
            romans.splice(real,1,0)
        } else if (rom  == "L") {
            console.log(50)
            integer += 50
            romans.splice(romans.indexOf(rom),1,0)
        } else if (rom  === "C" && (romans[romans.indexOf(rom)  + 1] != "D" && romans[romans.indexOf(rom)  + 1] != "M")) {
            console.log(100)
            integer += 100
            romans.splice(romans.indexOf(rom),1,0)
        } else if (rom  === "C" && romans[romans.indexOf(rom)  + 1] === "D") {
            console.log(400)
            integer += 400
            romans.splice(romans.indexOf(rom),1,0)
            romans.splice(real,1,0)
        } else if (rom  === "C" && romans[romans.indexOf(rom)  + 1] === "M") {
            console.log(900)
            integer += 900
            romans.splice(romans.indexOf(rom),1,0)
            romans.splice(real,1,0)
        } else if (rom  === "D") {
            console.log(500)
            integer += 500
            romans.splice(romans.indexOf(rom),1,0)
        } else if (rom  === "M") {
            console.log(1000)
            integer += 1000
            romans.splice(romans.indexOf(rom),1,0)
        }
        // i--
        // console.log(romans)
    }
    return integer
};

console.log("mile",romanToInt("L"))