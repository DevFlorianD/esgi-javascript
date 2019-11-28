console.log(camelCase('ToggleCase is_the coolest'));

function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}


function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str
        .toLowerCase()
        .replace('_', '')
        .split(' ')
        .map(function (item) {
            return ucfirst(item);
        })
        .join(" ");
}

function camelCase(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    str = capitalize(str);
    str = str.replace(/\s+/g, '');

    return str;
}

function snake_case(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    str = str.toLowerCase();
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