// // 100 Exercices d'algorithmique en JavaScript en vrac avec mon propre code
// // https:waytolearnx.com/category/exercice-javascript-corrige

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

// Écrivez une fonction qui prend la base et la hauteur d’un triangle et retourne sa surface. Notez que la surface d’un triangle est: (base * hauteur) / 2
function getSurface(base, hauteur) {
   return (base * hauteur) / 2;
}
console.log(getSurface(8, 2));
console.log(getSurface(7, 3));

// Écrivez un programme JavaScript pour inverser une chaîne de caractères.
function strReverse(str) {
   // Coupe, inverse et rejoint le tout
   str.split("").reverse().join("");
}
console.log(strReverse("WayToLearnX"));
console.log(strReverse("Hello"));

// Écrivez un programme JavaScript pour trouver le plus grand des trois entiers donnés.
function getMax(a, b, c) {
   let array = [a, b, c];
   let max = null;
   for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
         max = array[i];
      }
   }
   return max;
}
console.log(getMax(5, 9, 1));
console.log(getMax(2, 3, 10));

// Créez une fonction qui prend un tableau et renvoie le premier élément. Notez que le premier élément d’un tableau commence toujours par l’index 0.
function getFirst(tab) {
   return tab[0];
}
console.log(getFirst([1, 2, 3]));
console.log(getFirst([50, 60, 70]));

// Écrivez un programme JavaScript pour récupérer l’URL d’un site Web
console.log(window.location.href);
// console.log(document.URL);

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
function getLastElem(tab) {
   return tab[tab.length - 1];
}
console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));

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

// Créez une fonction qui trouve l’index d’un élément donné. Si l’élément n’existe pas, retournez -1.
function find(tab, val) {
   for (let i = 0; i < tab.length; i++) {
      if (tab[i] == val) return i;
   }
   return -1;
}
console.log(find([2, 7, 1], 7));
console.log(find([6, 9, 5], 6));
console.log(find([6, 7, 8], 9));

//   Écrivez une fonction pour vérifier si un tableau contient un nombre particulier.
function nbrExist(tab, val) {
   for (let i = 0; i < tab.length; i++) {
      if (tab[i] === val) {
         return true;
      }
   }
   return false;
}
console.log(nbrExist([6, 7, 8], 7));
console.log(nbrExist([1, 2, 3], 5));
console.log(nbrExist([], 0));

// Créez une fonction qui prend une chaîne (un nom aléatoire). Si le dernier caractère du nom est un « s », retournez TRUE, sinon retournez FALSE.

function checkS(str) {
   /*length commence à 0, avec le moins on commence par la dernière lettre*/
   return str[str.length - 1] === "s";
}
console.log(checkS("Thomas"));
console.log(checkS("Ali"));
console.log(checkS("Alex"));
console.log(checkS("Alvis"));

// Créez une fonction qui renvoie TRUE si une chaîne contient des espaces. Sinon renvoie FALSE.
function containSpaces(str) {
   return str.includes(" ");
}
console.log(containSpaces("Thomas"));
console.log(containSpaces("Hello World!"));
console.log(containSpaces(" "));
console.log(containSpaces(""));

// Créez une fonction qui prend un objet comme argument et renvoie une chaîne qui représente une personne. Les attributs de la personne devront être extraits des trois propriétés de l’objet...
function formatPrs(personne) {
   return `Il s'appelle ${personne.nom}, il a ${personne.age} ans et il habite à ${personne.adresse}`;
}
console.log(formatPrs({nom: "Thomas", age: "25", adresse: "Paris"}));
console.log(formatPrs({nom: "Joseph", age: "22", adresse: "Nantes"}));

// Créez une fonction qui prend une chaîne représentant l’humeur et renvoie une phrase au format suivant: « Aujourd’hui, je me sens {feeling} ». Cependant, si aucun argument n’est passé, retournez « Aujourd’hui, je me sens neutre ».
function myFeeling(feeling) {
   if (feeling === undefined) {
      console.log("Aujourd'hui, je me sens neutre");
   }
   return `${feeling}`;
}
console.log(myFeeling("heureux"));
console.log(myFeeling("triste"));
console.log(myFeeling());

// Créez une fonction qui renvoie le nombre d’arguments avec lesquels elle a été appelée.
function nbrArgs() {
   /* l'attribut vide contient "arguments" à la base*/
   return arguments.length;
}
console.log(nbrArgs());
console.log(nbrArgs({}));
console.log(nbrArgs("A"));
console.log(nbrArgs("A", "B"));

// Créez une fonction qui prend un mot et détermine s’il est pluriel ou singulier. Un mot pluriel est celui qui se termine par « s ». S’il est pluriel renvoyer TRUE sinon FALSE.
function check(str) {
   /* Récupérer la chaîne, puis la dernière lettre pour identifier le s*/
   if (str[str.length - 1] === "s") {
      return true;
   }
   return false;
   /*return str[str.length - 1] == 's';*/
}
console.log(check("enfants"));
console.log(check("filles"));
console.log(check("fille"));
console.log(check("enfant"));

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

// Écrivez l’expression régulière qui révèle le message caché. Vous devez supprimer tous les nombres pour révéler le message. Utilisez la classe de caractères \D dans votre expression.
let str = "242Welcome23 45to344 254324WayToLearnX!";
let patt = /\D */g;
let result = str.match(patt);
console.log(result.join(""));

// Créez une fonction qui prend un tableau avec des nombres et retourne un tableau avec les éléments multipliés par deux.
function tabX2(tab) {
   return tab.map((i) => i * 2);
}
console.log(tabX2([1, 2, 3]));
console.log(tabX2([5, 10, 20]));
console.log(tabX2([100, 200, 300]));

// Créez une fonction qui prend trois nombres comme arguments et renvoie TRUE si c’est un triangle, sinon renvoie FALSE.
function isTriangle(a, b, c) {
   /*Théorème d’inégalité, qui stipule que la somme des longueurs de deux côtés d’un triangle est toujours supérieure au troisième côté*/
   return a + b > c && b + c > a && c + a > b;
}
console.log(isTriangle(2, 3, 4));
console.log(isTriangle(2, 4, 5));
console.log(isTriangle(8, 2, 1));

// Créez une fonction qui renvoie la valeur ASCII du caractère transmis.
function charToAscii(c) {
   /*La méthode charCodeAt() renvoie un entier représentant l’unité de code UTF-16 à l’index donné.*/
   return c.charCodeAt(0);
}
console.log(charToAscii("A"));
console.log(charToAscii("a"));
console.log(charToAscii("+"));

// Avec une fraction sous forme d’une chaîne, indiquez si elle est supérieure ou non à 1 lorsqu’elle est évaluée.
function FracSup1(f) {
   /*fonction native d'évalutation*/
   return eval(f) > 1;
}
console.log(FracSup1("2/2"));
console.log(FracSup1("8/2"));
console.log(FracSup1("1/2"));

// Créez une fonction qui prend un tableau et renvoie la somme de tous les nombres du tableau.
function sum(tab) {
   let sum = 0;
   for (let i = 0; i < tab.length; i++) {
      sum += tab[i];
   }
   return sum;
}
console.log(sum([1, 1, 1]));
console.log(sum([1, 2, 3]));
console.log(sum([-2, 2, 1]));

// Créez une fonction qui prend un tableau de mots et le transforme en un tableau de longueur de chaque mot.
function countStr(tab) {
   return tab.map((el) => el.length);
}
console.log(countStr(["A", "B", "C"]));
console.log(countStr(["Welcome", "To", "WayToLearnX"]));
console.log(countStr(["Bob", "Ali", "Thomas"]));

// Créez une fonction qui renvoie le nombre de syllabes dans une chaîne.
function nbrOfSyllables(str) {
   // Ne fonctionne qu'avec des mots en 2 lettres par syllabe
   return str.length / 2;
}
console.log(nbrOfSyllables("SOSOSOSO"));
console.log(nbrOfSyllables("HAHAHAHAHA"));
console.log(nbrOfSyllables("RIRIRIRIRIRIRIRIRIRI"));

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

// // Créez une fonction qui ajoute une sous-chaîne à la fin de chaque chaîne du tableau.
function addEnd(tableau, fin) {
   return tableau.map((debutMot) => `${debutMot}${fin}`);
}
console.log(addEnd(["accept", "achet", "adapt"], "able"));
console.log(addEnd(["aim", "act", "ard"], "ant"));

// Créez une fonction qui vérifie si l’argument est un entier ou une chaîne. Renvoie « int » s’il s’agit d’un entier et « string » s’il s’agit d’une chaîne.
function checkIntOrStr(x) {
   if (typeof x === "string") {
      return "string";
   } else if (typeof x === "number") {
      return "int";
   } else {
      return "Hello World";
   }
   // let y = typeof x === "string" ? "string" : typeof x === "number" ? "int" : "Hello World";
   // return y
}
console.log(checkIntOrStr("WayToLearnX"));
console.log(checkIntOrStr(1));
console.log(checkIntOrStr("250"));

// Créez une fonction qui prend une phrase et renvoie le nombre de mots.
function count(str) {
   return str.split(" ").length;
}
console.log(count("Welcome to WayToLearnX"));
console.log(count("Hello World"));
console.log(count("I am going to my school"));

// Créez une fonction récursive qui renvoie le total de tous les nombres impairs jusqu’à n(inclus). n sera donné comme un nombre impair.
function sommeImpair(n) {
   if (n === 1) return 1;
   return n + sommeImpair(n - 2);
}
console.log(sommeImpair(3));
console.log(sommeImpair(7));
console.log(sommeImpair(59));

// Créez une fonction qui renvoie TRUE si la chaîne passée en paramètre ne contient que des lettres majuscules ou minuscules.
function isSameCase(str) {
   return str === str.toUpperCase() || str === str.toLowerCase();
}
console.log(isSameCase("WayToLearnX"));
console.log(isSameCase("waytolearnx"));
console.log(isSameCase("WAYTOLEARNX"));

// Créez une fonction pour multiplier toutes les valeurs d’un tableau par la longueur du tableau donné.
function mulByLen(tab) {
   return tab.map((element) => element * tab.length);
}
console.log(mulByLen([1, 1, 1]));
console.log(mulByLen([1, 2, 3]));
console.log(mulByLen([0, 0, 0, 0, 2]));

// Créez une fonction pour supprimer toutes les valeurs nulles d’un tableau.
function deleteNull(tab) {
   const result = tab.filter((withoutNull) => withoutNull !== null);
   return result;
}
console.log(deleteNull(["Alex", null, "Emily", "Bob"]));
console.log(deleteNull([0, 1, null, 2, null, 3]));
console.log(deleteNull([null, null, null]));

// (...) Vous devez implémenter une fonction qui renvoie TRUE si c’est une année bissextile, ou FALSE si ce n’est pas le cas.
function bissextile(year) {
   return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

// // Exercice JavaScript Corrigé – Partie 7
// // Créez une fonction qui trouve tous les nombres pairs de 1 au nombre donné.
function nbrPaire(n) {
   let array = [];
   for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
         array.push(i);
      }
   }
   return array;
}
console.log(nbrPaire(6));
console.log(nbrPaire(4));
console.log(nbrPaire(2));

// Écrivez une fonction qui renvoie TRUE si tous les caractères d’une chaîne sont identiques, sinon renvoie FALSE.
function isSame(str) {
   for (let i = 0; i < str.length - 1; i++) {
      if (str[i] !== str[i + 1]) {
         return false;
      }
   }
   return true;
}
console.log(isSame("bbbbbb"));
console.log(isSame("abababab"));
console.log(isSame("111111"));

// Vous avez un tableau de nombre, transformez ce tableau en miroir.
function miroir(tab) {
   let newA = [];
   for (let i = 0; i < tab.length; i++) {
      newA.push(tab[i]);
   }
   for (let i = tab.length - 2; i >= 0; i--) {
      newA.push(tab[i]);
   }
   return newA;
}
console.log(miroir([1, 2, 3]));
console.log(miroir([9, 8, 7]));
console.log(miroir([10, 20]));

// function miroir(tab) {
//     return [...tab, ...tab.splice(0, tab.length - 1).reverse()]
//   }

// Écrivez une fonction récursive qui trouve la somme des n premiers nombres naturels.
function somme(n) {
   if (n === 1) {
      return 1;
      // cas base
   } else {
      return somme(n - 1) + n;
      // cas général
   }
   /*	Logique :
    for (let i = 0; i >= n; i--) {
	    sum = sum + i;
	}*/
}
console.log(somme(3));
console.log(somme(2));
console.log(somme(10));

// Créez une fonction pour extraire le nom de la catégorie de son URL.
function getCategory(url) {
   return url.split("/")[3];
}
console.log(getCategory("https://waytolearnx.com/html/"));
console.log(getCategory("https://waytolearnx.com/css/"));
console.log(getCategory("https://waytolearnx.com/javascript/"));

// Écrivez une fonction qui renvoie TRUE si un objet est vide, sinon renvoie FALSE.
function isObjEmpty(obj) {
   if (Object.keys(obj).length === 0) {
      return true;
   }
   return false;
}
console.log(isObjEmpty({a: 1, b: 2}));
console.log(isObjEmpty({a: 1}));
console.log(isObjEmpty({}));

// Écrivez une fonction qui récupère les n derniers éléments d’un tableau.
function lastNitem(t, n) {
   // Fin du mot inférieur ou égal à la longueur du tableau t, on coupe la longueur de t par -n (la fin) dans la moyenen de t, ou alors c'est invalide
   return n <= t.length ? t.slice(t.length - n, t.length) : "null";
}
console.log(lastNitem([8, 1, 5, 2, 4, 9], 3));
console.log(lastNitem([1, 2, 3], 1));
console.log(lastNitem([1, 2, 3, 4], 10));
console.log(lastNitem([1, 2, 3, 4], 0));

// Écrivez une fonction qui supprime tous les caractères spéciaux dans une chaîne.
function removeSpecialChar(str) {
   // matches a single character in the range between a
   let regex = str.replace(/[^a-z]/gi, "");
   return regex;
}
console.log(removeSpecialChar("@W*-a?;+y!°T-8o_&L?e!=r%$n<X"));
console.log(removeSpecialChar(",A@[L]?e*$!x"));
console.log(removeSpecialChar("$*;H[!e&}l]l@{^.o"));

// Écrivez une fonction qui renvoie TRUE si un nombre est un palindrome.
function checkPalindrome(n) {
   // Instance, coupé par lettre, inverser, rejoindre instance(attribut)
   return String(n).split("").reverse().join("") == String(n);
}

// function checkPalindrome(n) {
//     for( let i = n; i > 0; i-- ) {
//         if ( n[i] = n-1 ) {
//             return true
//         } else {
//             return false
//         }
//     }
// }
// console.log(checkPalindrome(212));
// console.log(checkPalindrome(123));
// console.log(checkPalindrome(75257));

// // Exercice JavaScript Corrigé – Partie 8
// ...Créez une fonction qui calcule la distance de hamming entre deux chaînes.
function distanceHamming(str1, str2) {
   // Itère et filtre sur 1ère string puis compare longueur des mots par rapport à la 2e
   return [...str1].filter((x, i) => x != str2[i]).length;
}

// Créez une fonction qui prend un tableau de nombres et renvoie le minimum et le maximum dans un tableau [Min, Max].
function getMinMax(tab) {
   return [Math.min(...tab), Math.max(...tab)];
}
console.log(getMinMax([8, 1, 9, 2, 6]));
console.log(getMinMax([22, 2]));
console.log(getMinMax([5]));

// Créez une fonction qui compte le nombre de majuscules dans une chaîne de caractères.
function countMaj(str) {
   // REGEX ou .split
   return str.replace(/[^A-Z]/g, "").length;
}
console.log(countMaj("abcdEFG"));
console.log(countMaj("WayToLearnX"));
console.log(countMaj("abcdefghigklmnopkrstvuwxyz"));

// Créez une fonction qui compte le nombre de syllabes d’un mot. Chaque syllabe est séparée par un tiret -.
function nbrOfSlab(str) {
   // Décompose la moyenne du mot avec ajout du tiret
   return str.split("-").length;
}

// Implémenter une fonction qui renvoie la distance donnée en kilomètres convertie en miles. Vous devez arrondir le résultat jusqu’au quatrième chiffre décimal.

function toMiles(km) {
   // Mathématiques, conversion en miles "parseFloat" + arrondir "toFixed" à 4
   return parseFloat((km * 0.621371).toFixed(4));
}
console.log(toMiles(5));
console.log(toMiles(7));
console.log(toMiles(10));

// Créez une fonction qui prend un nombre (de 1 à 12) et renvoie son nom de mois correspondant sous forme de chaîne.
function nomDuMois(n) {
   const month = {
      1: "Janvier",
      2: "Février",
      3: "Mars",
      4: "Avril",
      5: "Mai",
      6: "Juin",
      7: "Juillet",
      8: "Août",
      9: "Septembre",
      10: "Octobre",
      11: "Novembre",
      12: "Décembre",
   };
   return month[n];
}
console.log(nomDuMois(3));
console.log(nomDuMois(12));
console.log(nomDuMois(6));

// Créez une fonction qui renvoie « Majuscule » si toutes les lettres d’un mot sont en majuscules, « Minuscule » si toutes les lettres d’un mot sont en minuscule et « Mix » s’il contient à la fois des majuscules et des minuscules.
function caseOf(str) {
   if (str === str.toUpperCase()) {
      return "Majuscule";
   } else if (str === str.toLowerCase()) {
      return "Minuscule";
   } else {
      return "Mix";
   }
}
console.log(caseOf("WAYTOLEARNX"));
console.log(caseOf("waytolearnx"));
console.log(caseOf("WayToLearnX"));

// Le temps a un format: heures:minutes. Les heures et les minutes ont deux chiffres, comme 07:00. Ecrivez l’expression régulière pour trouver le temps(heures:minutes) dans la chaîne.
let str = "Le restaurant ouvre à 08:00 situé au boulevard du 200:200";
// d matches carachter index with case sensitive, /d matches 0-9, {2} matches previous token 2 times
let expr = /\d{2}\:\d{2}/;
let result = str.match(expr);

console.log(result.join(""));

// Écrivez une fonction qui prend un nombre binaire de 8 bits sous forme de tableau et convertissez-le en décimal.
function binToDec(tab) {
   // parseInt method
   return parseInt(tab.join(""), 2);
}
console.log(binToDec([0, 0, 0, 1, 1, 1, 1, 1]));
console.log(binToDec([0, 0, 0, 0, 0, 0, 0, 1]));
console.log(binToDec([1, 0, 0, 0, 0, 0, 0, 0]));

// // Exercice JavaScript Corrigé – Partie 9
// Écrivez une méthode qui vérifie si une chaîne est un palindrome.
function isPalindrome(str) {
   // Itère sur le string, dans les deux sens, joint en un mot
   return [...str].reverse().join("") == str;
}
console.log(isPalindrome("NON"));
console.log(isPalindrome("TOTO"));
console.log(isPalindrome("SOS"));
console.log(isPalindrome("SELLES"));

// Écrivez une fonction qui prend deux nombres et renvoie s’ils doivent être additionnés, soustraits, multipliés ou divisés pour obtenir 8. Si aucune des opérations ne peut donner 8, retournez NULL.
function operation(n1, n2) {
   let n3 = 0;
   if (n1 + n2 === 8) {
      return '"Il faut additionner les deux nombres :"';
   } else if (n1 * n2 === 8) {
      /*return '"Il faut multiplier les deux nombres :"';
  } else if (n1 - n2 === 8) {*/
      return '"Il faut soustraire les deux nombres :"';
   } else if (n1 / n2 === 8) {
      return '"Il faut diviser les deux nombres :"';
   } else {
      return null;
   }
}
console.log(operation(4, 4));
console.log(operation(10, 2));
console.log(operation(32, 4));
console.log(operation(6, 6));

// Vous avez embauché trois commerciales et vous les payez. Créez une fonction qui prend trois nombres (le salaire horaire de chaque commerciale) et renvoie la différence entre le commerciale le mieux payé et le moins payé.
function getDiff(c1, c2, c3) {
   // Il suffit d'user des méthodes Math.max&min sur les arguments en paramètre
   return Math.max(...arguments) - Math.min(...arguments);
}
console.log(getDiff(200, 10, 90));
console.log(getDiff(56, 29, 16));
console.log(getDiff(2, 10, 5));

// Vous avez un tableau de nombres, créez une fonction qui renvoie le même tableau mais avec l’index de chaque élément dans le tableau ajouté à lui-même...
function addIndexeToElem(tab) {
   // Renvoie nouveau tableau prenant leur valeur et leur additionant en plus le chiffre de leur index
   return tab.map((val, i) => val + i);
}
console.log(addIndexeToElem([0, 0, 0, 0]));
console.log(addIndexeToElem([2, 1, 0, 1]));
console.log(addIndexeToElem([9, 8, 7, 6]));

// Créez une fonction qui prend une chaîne et renvoie une chaîne avec des espaces entre tous les caractères.
function addSpace(str) {
   return str.split("").join(" ");
   // return [...str].join(' ');
}
console.log(addSpace("waytolearnx"));
console.log(addSpace("Hello BoB"));
console.log(addSpace("Thank you"));

// ...Créez une fonction qui a le tableau des boissons comme argument et retournez l’objet boissons trié par prix dans l’ordre croissant.
function sortByPrice(boissons) {
   // Méthode native de tri, comparer propriété a et b...
   return boissons.sort((a, b) => a.prix - b.prix);
}
// créer le tableau des boissons
boissons = [
   {nom: "citron", prix: 50},
   {nom: "menthe", prix: 35},
   {nom: "fraise", prix: 5},
];
// Afficher la sortie
console.log(sortByPrice(boissons));

// Créez une fonction qui prend un entier et retourne s’il s’agit d’un nombre uniforme ou non.
function isUniforme(n) {
   // Instance, chaîne vide + attribut, strictement 1
   return new Set("" + n).size === 1;
}
console.log(isUniforme(444));
console.log(isUniforme(-444));
console.log(isUniforme(0));

// Avec deux chaînes, créez une fonction qui renvoie le nombre total de caractères uniques de la chaîne concaténée.
function uniqueChr(s1, s2) {
   // Set & size propriété renvoyant le nombre d'éléments contenus dans un objet
   return new Set(s1 + s2).size;
}
console.log(uniqueChr("attention", "intention"));
console.log(uniqueChr("plus", "tous"));
console.log(uniqueChr("bis", "lis"));

// Écrivez une fonction récursive qui trouve la somme d’un tableau.
function somme(tab) {
   if (tab.length === 0 || "") return 0;
   // Sinon renvoie le tableau dans la fonction(attribut)
   else return tab.pop() + somme(tab);
}
console.log(somme([1, 2, 3]));
console.log(somme([1, 2]));
console.log(somme([]));

// // Exercice JavaScript Corrigé – Partie 10
// Créez une fonction qui accepte deux paramètres et, si les deux paramètres sont des chaînes, additionnez-les comme s’ils étaient des entiers ou si les deux paramètres sont des entiers, concaténez-les.
