
exports.min = function min(array) {
    if (isValidData(array)) {
        let min = array[0];
        array.forEach(element => {
            if (element < min) min = element;
        });
    	return min;
    } else return 0;
}

exports.max = function max(array) {
    if (isValidData(array)) {
        let max = array[0];
        array.forEach(element => {
            if (element > max) max = element;
        });
    	return max;
    } else return 0;
}

exports.avg = function avg(array) {
    if (isValidData(array)) {
        return array.reduce((sum, current) => sum + current) / array.length;
    }
    else return 0;
}

function isValidData(data) {
    if (data === undefined) return false;
    if (data.length === 0)  return false;
    return true;
}
