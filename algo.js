// Exercices d'algorithmique en JavaScript avec mon propre code
// https://waytolearnx.com/category/exercice-javascript-corrige

// Addition
function addition(x, y) {
    return x + y;
}
let add = addition(1, 2)
console.log(add);

function addition(x, y) {
    return console.log(x + y);
}
addition(1, 2)

// Calcul du carré
function carre(b) {
    return b * b
}
console.log(carre(2));
console.log(carre(4));

// Vrai ou faux
function checkEq(a, b) {
    if (a === b) {
        return true
    }
    return false
}

console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));

// Créer 2 tableaux entiers
function concatener(tab1, tab2) {
    const array = tab1.concat(tab2)
    return array
}
console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));

// Vérification de nombres
function checkNbr(n) {
    if (n % 3 === 0) return "Hello"
    if (n % 5 === 0) return "World"
    if (n % 3 === 0 || n % 5 === 0) return "Hello World"
}
console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));

// Vérification de l'ordre des chaînes de caractères
function checkOrder(str) {
    let result;
    for (let i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i) < str.charCodeAt(i + 1)) {
            result = true
        } else {
            result = false
        }
    }
    return result;
}
console.log(checkOrder("abc"));
console.log(checkOrder("zyx"));
console.log(checkOrder("123"));
console.log(checkOrder("aabbcc"));

// Trouver les nombres pairs