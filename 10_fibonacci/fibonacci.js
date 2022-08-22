const fibonacci = function(n) {
    parseInt(n);

    if(n <= 0) {
        return "OOPS";
    };
    
    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 2] + result[i - 1];
    }

    return result[result.length - 1];
};


// Do not edit below this line
module.exports = fibonacci;
