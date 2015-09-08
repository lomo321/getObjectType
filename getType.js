function getPrimitiveDataType(obj) {
    if (typeof obj === "object") {
        if (!obj) {
            return "null";
        } else {
            return "object";
        }
    } else {
        return (typeof obj);
    }
}
//should return an array of strings => ["string", "number", "boolean", "null", "undefined", "symbol", "object"];

exports.getPrimitiveDataType = getPrimitiveDataType;


// `true` or `false`
function isObject(obj) {
    if (getPrimitiveDataType(obj) === "object") {
        return true
    } else {
        return false
    }
}

exports.isObject = isObject;

function isString() {
    if (getPrimitiveDataType(obj) === "string") {
        return true
    } else {
        return false
    }
}

exports.isString = isString;

function isNumber(obj) {
    if (getPrimitiveDataType(obj) === "number") {
        return true
    } else {
        return false
    }
}

exports.isNumber = isNumber;

function isBoolean(obj) {
    if (getPrimitiveDataType(obj) === "boolean") {
        return true
    } else {
        return false
    }
}

exports.isBoolean = isBoolean;

function isSymbol(obj) {
    if (getPrimitiveDataType(obj) === "symbol") {
        return true
    } else {
        return false
    }
}

exports.isSymbol = isSymbol;

function isFunction(obj) {
    if (getPrimitiveDataType(obj) === "object" && Object.prototype.toString.call(obj) === '[object Function]') {
        return true;
    } else {
        return false
    }
}

exports.isFunction = isFunction;

function isArray(obj) {
    if (getPrimitiveDataType(obj) === "object" && Object.prototype.toString.call(obj) === '[object Array]') {
        return true
    } else {
        return false
    }
}

exports.isArray = isArray;