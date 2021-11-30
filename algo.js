// 100 Exercices d'algorithmique en JavaScript en vrac avec mon propre code
// https:waytolearnx.com/category/exercice-javascript-corrige

// Exercice JavaScript Corrigé – Partie 1
// Créez une fonction qui prend deux nombres comme arguments et retourne leur somme.
function addition(x, y) {
   return x + y;
}
let add = addition(1, 2);
console.log(add);

function addition(x, y) {
   return console.log(x + y);
}
addition(1, 2);

// Écrivez une fonction qui prend un nombre entier de minutes et le convertit en secondes.
function minuteToSecond(minutes) {
   let seconds = minutes * 60;
   return seconds;
}
console.log(minuteToSecond(4));
console.log(minuteToSecond(3));

// Créez une fonction qui prend un nombre en argument, incrémente le nombre +1 et renvoie le résultat.
function increment(n) {
   n += 1;
   return n;
}
console.log(increment(1));
console.log(increment(4));

// EX 4
// Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2

// PT1 EX9
// Écrivez un programme JavaScript pour renvoyer le reste de deux nombres. Il existe un seul opérateur en JavaScript, capable de fournir le reste d’une division. Deux nombres sont transmis comme paramètres. Le premier paramètre divisé par le deuxième paramètre.

function resteDiv(a, b) {
   return a % b;
   /*let r = a;
    while (r >= b) {
        r = r - b
    }
    return r*/
}
console.log(resteDiv(1, 3));
console.log(resteDiv(2, 4));
console.log(resteDiv(3, 3));

// Exercice JavaScript Corrigé – Partie 2
// Corrigez le code suivant (Erreur de syntaxe), pour calculer le carré.
function carre(b) {
   return b * b;
}
console.log(carre(2));
console.log(carre(4));

// Avec deux nombres, retournez TRUE si la somme des deux nombres est inférieure à 100. Sinon, retournez FALSE.
function check(a, b) {
   if (a + b <= 100) {
      return true;
   }
   return false;
}
console.log(check(5, 20));
console.log(check(60, 55));

// Écrivez une fonction qui convertit les heures en secondes. Notez qu’il y a 60 secondes en une minute et 60 minutes en une heure.
function heureSeconde(heure) {
   // rendu minutes
   let minutes = heure * 60;
   // rendu secondes
   let secondes = minutes * 60;
   return secondes;
}
console.log(heureSeconde(1));
console.log(heureSeconde(5));

// Créez une fonction qui prend un nombre et renvoie TRUE s’il est inférieur ou égal à zéro, sinon retournez FALSE.
function checkNbr(n) {
   if (n <= 0) {
      return true;
   }
   return false;
}
console.log(checkNbr(1));
console.log(checkNbr(-1));
console.log(checkNbr(0));

// Créez une fonction qui renvoie TRUE lorsque nbr1 est égal à nbr2; sinon retournez FALSE.
function isEqual(nbr1, nbr2) {
   return nbr1 === nbr2;
}
console.log(isEqual(3, 6));
console.log(isEqual(1, "1"));
console.log(isEqual(1, 1));

// Créez une fonction qui renvoie TRUE si un entier est divisible par 5, sinon retournez FALSE.
function isDivisible(n) {
   if (n % 5 === 0) {
      return true;
   }
   return false;
}
console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));

// Écrivez une fonction qui prend deux entiers (heures, minutes) et les convertit en secondes.
function hmTos(heure, minute) {
   return minute * 60 + heure * 60 * 60;
}
console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));

// Écrivez une fonction pour inverser un tableau. Attention: N’utilisez pas la méthode intégrée reverse();
function reverseTab(tab) {
   let newTab = [];
   while (tab.length) {
      newTab.push(tab.pop());
   }
   return newTab;
}
console.log(reverseTab([1, 2, 3]));
console.log(reverseTab([1, 1, 2, 2, 3]));

// Créez une fonction qui prend un tableau et renvoie le dernier élément du tableau.

// Exercice JavaScript Corrigé – Partie 3
// Créez une fonction qui vérifier l’égalité de deux paramètres a et b. La valeur et le type de paramètres doivent être testés afin d’avoir une égalité. La fonction doit renvoyer TRUE si les paramètres sont égaux et FALSE s’ils sont différents.

function checkEq(a, b) {
   if (a === b) {
      return true;
   }
   return false;
}

console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));

// Créez une fonction qui renvoie TRUE si une chaîne est vide et sinon renvoie FALSE.

function isEmpty(str) {
   return str ? false : true;
}
console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));

// Concaténer deux chaînes en une seule chaîne
function concatStr(str1, str2) {
   return str1 + " | " + str2;
}
console.log(concatStr("True", "False"));
console.log(concatStr("On", "Off"));
console.log(concatStr("A", "B"));

// Créez une fonction qui prend un nom et renvoie un message d’accueil sous la forme d’une chaîne. N’utilisez pas une fonction normale mais utilisez une fonction fléchée(Arrow)

const msg = (name) => `Hello ${name}, Welcome to WayToLearnX!`;
console.log(msg("Thomas"));
console.log(msg("Alex"));
console.log(msg("Emily"));

// Écrivez une fonction qui renvoie la longueur d’une chaîne. Utiliser une fonction récursive.

function size(str) {
   // Si la chaîne est vide renvoie 0
   if (!str) {
      return 0;
   } else {
      return size(str.slice(0, -1)) + 1;
   }
}
console.log(size("alex"));
console.log(size("x"));
console.log(size(""));

/* function size(str) {
    let c = 0;
    for (let i = 0; i < ""; i++) {
        c = c++
    }
    return c
}
console.log(size("alex"));
console.log(size("x"));
console.log(size("")); */

function compareSize(str1, str2) {
   return str1.length === str2.length;
}
console.log(compareSize("AA", "BB"));
console.log(compareSize("123", "1"));
console.log(compareSize("Ali", "Bob"));

// Créez une fonction qui prend la hauteur et la largeur et trouve le périmètre d’un rectangle.

function getPerimeter(height, width) {
   // Largeur fois hauteur par 2 pour calculer le périmètre
   return (height + width) * 2;
}
console.log(getPerimeter(2, 6));
console.log(getPerimeter(3, 10));
console.log(getPerimeter(1, 5));

// Le problème du fermier...
function nbrsPattes(poulets, vaches, chevaux) {
   return poulets * 2 + vaches * 4 + chevaux * 4;
}
console.log(nbrsPattes(1, 4, 2));
console.log(nbrsPattes(2, 2, 2));
console.log(nbrsPattes(2, 0, 3));

// Créez une fonction qui prend un nombre comme argument et renvoie « pair » pour les nombres pairs et « impair » pour les nombres impairs.
function check(n) {
   if (n % 2 === 0) {
      return "pair";
   } else {
      return "impair";
   }
}
console.log(check(2));
console.log(check(7));
console.log(check(22));

// Exercice JavaScript Corrigé – Partie 4
// Créez une fonction pour concaténer deux tableaux entiers.
function concatener(tab1, tab2) {
   const array = tab1.concat(tab2);
   return array;
}
console.log(concatener([1, 2], [3, 4]));
console.log(concatener([9, 8], [1, 5, 6, 7]));
console.log(concatener([1, 1, 1], [2, 2, 2]));

// Exercice JavaScript Corrigé – Partie 5
// Écrivez une fonction qui prend un entier et: Si le nombre est un multiple de 3, retournez « Hello ». Si le nombre est un multiple de 5, retournez « World ». Si le nombre est un multiple de 3 et de 5, retournez « Hello World ».

function checkNbr(n) {
   if (n % 3 === 0) return "Hello";
   if (n % 5 === 0) return "World";
   if (n % 3 === 0 || n % 5 === 0) return "Hello World";
}
console.log(checkNbr(3));
console.log(checkNbr(5));
console.log(checkNbr(15));

// Exercice JavaScript Corrigé – Partie 6
// Créez une fonction qui prend une chaîne et renvoie TRUE ou FALSE, selon que les caractères sont en ordre ou non.
function checkOrder(str) {
   let result;
   for (let i = 0; i < str.length - 1; i++) {
      if (str.charCodeAt(i) < str.charCodeAt(i + 1)) {
         result = true;
      } else {
         result = false;
      }
   }
   return result;
}
console.log(checkOrder("abc"));
console.log(checkOrder("zyx"));
console.log(checkOrder("123"));
console.log(checkOrder("aabbcc"));

// Exercice JavaScript Corrigé – Partie 7
// Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.

// Exercice JavaScript Corrigé – Partie 8
// Exercice JavaScript Corrigé – Partie 9
// Exercice JavaScript Corrigé – Partie 10
