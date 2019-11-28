console.log(camelCase('hello world'));
console.log(snake_case('hello world hello hello'));
console.log(leet('Anaconda'));

function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}

function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str
        .toLowerCase()
        .split(' ')
        .map(function (item) {
            return ucfirst(item);
        })
        .join(" ");
}

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return capitalize(str).
    replace(/\s+/g, '');
}

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str.
    replace(/\s+/g, '_');
}

function leet(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    const arrayStr = str.split('');
    let res = '';
    for (let i=0; i < arrayStr.length ; i++){
        switch (arrayStr[i].toUpperCase()) {
            case 'A':
                res += '4';
                break;
            case 'E':
                res += '3';
                break;
            case 'I':
                res += '1';
                break;
            case 'O':
                res += '0';
                break;
            case 'U':
                res += '_';
                break;
            case 'Y':
                res += '7';
                break;
            default:
                res += arrayStr[i];
                break;
        }
    }

    return res;
}

// function prop_access(str) {
//     if (typeof str !== "string" || str.length === 0) return "";
//
// }