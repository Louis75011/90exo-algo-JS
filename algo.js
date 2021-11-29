// Exercices d'algorithmique en JavaScript en vrac avec mon propre code
// https://waytolearnx.com/category/exercice-javascript-corrige

// Exercice JavaScript Corrigé – Partie 1
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
function addition(x, y) {
    return x + y;
}
let add = addition(1, 2)
console.log(add);

function addition(x, y) {
    return console.log(x + y);
}
addition(1, 2)

// Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
function minuteToSecond(minutes) {
    let seconds = minutes * 60;
    return seconds;
}
console.log(minuteToSecond(4));
console.log(minuteToSecond(3));

// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.



// Exercice JavaScript Corrigé – Partie 2
// Corrigez le code suivant (Erreur de syntaxe), pour calculer le carré.
function carre(b) {
    return b * b
}
console.log(carre(2));
console.log(carre(4));

// Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE.
function check(a, b) {
    if (a + b <= 100) {
        return true
    }
    return false
}
console.log(check(5, 20));
console.log(check(60, 55));

// Écrivez une fonction qui convertit les heures en secondes. Notez qu’il y a 60 secondes en une minute et 60 minutes en une heure.
function heureSeconde(heure) {
    // rendu minutes
    let minutes = heure * 60
    // rendu secondes
    let secondes = minutes * 60
    return secondes
}
console.log(heureSeconde(1));
console.log(heureSeconde(5));

// Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon retournez FALSE.
function checkNbr(n) {
    if (n <= 0) {
        return true
    }
    return false
}
console.log(checkNbr(1));
console.log(checkNbr(-1));
console.log(checkNbr(0));

// Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.
function isEqual(nbr1, nbr2) {
    return nbr1 === nbr2
}
console.log(isEqual(3, 6));
console.log(isEqual(1, '1'));
console.log(isEqual(1, 1));

// Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
function isDivisible(n) {
    if (n % 5 === 0) {
        return true
    }
    return false
}
console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));

// Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
function hmTos(heure, minute) {
    return (minute * 60) + (heure * 60 * 60)
}
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));

// Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();
function reverseTab(tab) {
    let newTab = [];
    while (tab.length) {
        newTab.push(tab.pop())
    }
    return newTab
}
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));

// Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.


// // Exercice JavaScript Corrigé – Partie 3
// // Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.
// function checkEq(a, b) {
//     if (a === b) {
//         return true
//     }
//     return false
// }

// console.log(checkEq(5, 5));
// console.log(checkEq(5, 0));
// console.log(checkEq(5, false));
// console.log(checkEq(5, "5"));

// // Exercice JavaScript Corrigé – Partie 4
// // Créez une fonction pour concaténer deux tableaux entiers.
// function concatener(tab1, tab2) {
//     const array = tab1.concat(tab2)
//     return array
// }
// console.log(concatener([1, 2], [3, 4]));
// console.log(concatener([9, 8], [1, 5, 6, 7]));
// console.log(concatener([1, 1, 1], [2, 2, 2]));

// // Exercice JavaScript Corrigé – Partie 5
// // Écrivez une fonction qui prend un entier et: Si le nombre est un multiple de 3, retournez « Hello ». Si le nombre est un multiple de 5, retournez « World ». Si le nombre est un multiple de 3 et de 5, retournez « Hello World ».
// function checkNbr(n) {
//     if (n % 3 === 0) return "Hello"
//     if (n % 5 === 0) return "World"
//     if (n % 3 === 0 || n % 5 === 0) return "Hello World"
// }
// console.log(checkNbr(3));
// console.log(checkNbr(5));
// console.log(checkNbr(15));

// // Exercice JavaScript Corrigé – Partie 6
// // Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre ou non.
// function checkOrder(str) {
//     let result;
//     for (let i = 0; i < str.length - 1; i++) {
//         if (str.charCodeAt(i) < str.charCodeAt(i + 1)) {
//             result = true
//         } else {
//             result = false
//         }
//     }
//     return result;
// }
// console.log(checkOrder("abc"));
// console.log(checkOrder("zyx"));
// console.log(checkOrder("123"));
// console.log(checkOrder("aabbcc"));

// // Exercice JavaScript Corrigé – Partie 7
// // Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.

// // Exercice JavaScript Corrigé – Partie 8
// // Exercice JavaScript Corrigé – Partie 9
// // Exercice JavaScript Corrigé – Partie 10