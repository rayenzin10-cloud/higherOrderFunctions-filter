# filtreAvecFilter

## Introduction

Il est bon de savoir que la méthode **filter** permet de créer un tableau ne contenant que les éléments respectant une condition.

---

## Basic

### 1 — Nombres pairs

Écris une fonction appelée `nombresPairs` qui prend un tableau de nombres comme paramètre et retourne un tableau contenant uniquement les nombres pairs.

```javascript
function nombresPairs(nombres) {
}

nombresPairs([1,2,3,4,5,6]); // => [2,4,6]
```

### 2 — Multiples de trois

Écris une fonction appelée `multiplesDeTrois` qui prend un tableau de nombres comme paramètre et retourne un tableau contenant uniquement les nombres multiples de trois.

```javascript
function multiplesDeTrois(nombres) {
}

multiplesDeTrois([1,3,4,6,9,10]); // => [3,6,9]
```

### 3 — Nombres positifs

Écris une fonction appelée `nombresPositifs` qui prend un tableau de nombres comme paramètre et retourne un tableau contenant uniquement les nombres positifs.

```javascript
function nombresPositifs(nombres) {
}

nombresPositifs([-3,2,-1,5,0]); // => [2,5]
```

### 4 — Chaînes de longueur paire

Écris une fonction appelée `longueurPaire` qui prend un tableau de chaînes de caractères et retourne uniquement celles dont la longueur est paire.

```javascript
function longueurPaire(chaines) {
}

longueurPaire(["chat","chien","lion"]); // => ["chat","lion"]
```

---

## Plus de pratique

### 1 — Nombres impairs

Écris une fonction appelée `nombresImpairs` qui prend un tableau de nombres et retourne uniquement les nombres impairs.

```javascript
function nombresImpairs(nombres) {
}
```

### 2 — Nombres négatifs

Écris une fonction appelée `nombresNegatifs` qui prend un tableau de nombres et retourne uniquement les nombres négatifs.

```javascript
function nombresNegatifs(nombres) {
}
```

### 3 — Nombres supérieurs à six

Écris une fonction appelée `superieursASix` qui prend un tableau de nombres et retourne uniquement ceux qui sont strictement supérieurs à 6.

```javascript
function superieursASix(nombres) {
}
```

### 4 — Chaînes qui commencent par un caractère

Écris une fonction appelée `commenceParCaractere` qui prend :
- un tableau de chaînes
- un caractère  
et retourne uniquement les chaînes qui commencent par ce caractère.

```javascript
function commenceParCaractere(chaines, caractere) {
}

var mots = 'the quick brown fox jumps over the lazy dog'.split(' ');
commenceParCaractere(mots, 'q'); // => ['quick']
commenceParCaractere(mots, 't'); // => ['the','the']
```

### 5 — Chaînes à index pair et longueur paire

Écris une fonction appelée `indexPairEtLongueurPaire` qui prend un tableau de chaînes et retourne uniquement les chaînes :
- situées à un index pair
- ayant une longueur paire

```javascript
function indexPairEtLongueurPaire(chaines) {
}
indexPairEtLongueurPaire(['lion','monkey','aardvaark','cat','doge']);
// => ['lion','doge']

indexPairEtLongueurPaire(['red','green','purple','blue','yellow']);
// => ['purple','yellow']
```


### 6 — Déplacer les zéros à la fin

Écris une fonction appelée `deplacerZeros` qui prend un tableau de nombres et retourne un tableau où tous les zéros sont déplacés à la fin en utilisant filter.

```javascript
function deplacerZeros(nombres) {
}

deplacerZeros([2,0,3,0,40,3,6,0,10,11]);
// => [2,3,40,3,6,10,11,0,0,0]
```

