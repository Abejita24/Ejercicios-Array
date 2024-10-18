function isArrayEmpty(arr) {
    return Array.isArray(arr) && JSON.stringify(arr) === "[]";
}

console.log(isArrayEmpty([]));        // true
console.log(isArrayEmpty([1, 2, 3])); // false
console.log(isArrayEmpty({}));        // false (no es un arreglo)