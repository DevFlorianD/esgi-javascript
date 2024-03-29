function ucfirst(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str[0].toUpperCase() + str.substring(1);
}


function capitalize(str) {
    if (typeof str !== "string" || str.length === 0) return "";
    return str
        .toLowerCase()
        .replace('_', ' ')
        .trim()
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
                res += '(_)';
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

function prop_access(object, path) {
    if (typeof path != "string"){
        return object;
    }

    if(typeof object != 'object' || object == null) {
        console.log(path + ' not exist');
        return;
    }
    if (path === '') {
        return object;
    }

    const props = path.split('.');
    let property = object;
    props.forEach(function (prop) {
        if(!property.hasOwnProperty(prop)) {
            console.log(path + ' not exist');
            return;
        }
        property = property[prop];
    });
    return property;
}

function yoda(str) {
    if(typeof str !== "string" || !str) return "";
    return str.split(' ').reverse().join(' ');
}

function vig(str, code) {
    while(code.length < str.length) {
        code += code;
    }
    let codeIndex = 0;
    return str.split('').map(function(char) {
        const carCode = char.charCodeAt(0) - "a".charCodeAt(0);

        if(carCode <0 || carCode > 25) return char;

        const codeCode = code[codeIndex++].charCodeAt(0) - "a".charCodeAt(0);
        const cryptedCode = carCode + codeCode % 26;

        return String.fromCharCode(cryptedCode + "a".charCodeAt(0));
    }).join('');
}