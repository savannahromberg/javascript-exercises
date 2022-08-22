const regex = /[^A-Za-z]/g

const palindromes = function (string) {
    let alphaString = string.replace(regex, "").toLowerCase();
    let alphaArray = alphaString.split('');
    let array = alphaArray.join('');
    let revArray = alphaArray.reverse().join('');

console.log(array, revArray);

for (let i = 0; i <= array.length; i++) {
    if (array === revArray) {
        return true;
    } else {
        return false;
    };
};

};

// Do not edit below this line
module.exports = palindromes;
