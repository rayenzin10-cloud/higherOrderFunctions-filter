function each(tab, func) {
    for (var i = 0; i < tab.length; i++) {
        func(tab[i], i);
    }
}

function filter(array, func) {
    var result = [];
    each(array, function (el, i) {
        if (func(el, i)) {
            result.push(el);
        }
    });
    return result;
}



//basic
//ex1
function nombresPairs(nombres) {
    return filter(nombres, function (el, i) {
        return el % 2 === 0;
    })
}

nombresPairs([1, 2, 3, 4, 5, 6]);


//ex2
function multiplesDeTrois(nombres) {
    return filter(nombres, function (el, i) {
        return el % 3 === 0;
    })
}

multiplesDeTrois([1, 3, 4, 6, 9, 10]);


//ex3
function nombresPositifs(nombres) {
    return filter(nombres, function (el, i) {
        return el >= 0;
    })
}

nombresPositifs([-3, 2, -1, 5, 0]);


//ex4
function longueurPaire(chaines) {
    return filter(chaines, function (el, i) {
        return el.length % 2 === 0;
    })
}

longueurPaire(["chat", "chien", "lion"]);

//plus de pratique
//ex1

function nombresImpairs(nombres) {
    return filter(nombres, function (el, i) {
        return el % 2 !== 0;
    })
}

nombresImpairs([1, 2, 3, 4, 5, 6]);

//ex2
function nombresNegatifs(nombres) {
    return filter(nombres, function (el, i) {
        return el < 0;
    })
}

nombresNegatifs([1, -2, 3, -4, 5, 6]);




//ex3
function superieursASix(nombres) {

    return filter(nombres, function (el, i) {
        return el > 6;
    })
}

superieursASix([1, 2, 30, 4, 10, 6]);


//ex4

function commenceParCaractere(chaines, caractere) {
    return filter(chaines, function (el, i) {
        return el[0] === caractere;
    })
}

var mots = 'the quick brown fox jumps over the lazy dog'.split(' ');
commenceParCaractere(mots, 'q');
commenceParCaractere(mots, 't');

//ex5
function indexPairEtLongueurPaire(chaines) {
    return filter(chaines, function (el, i) {
        return i % 2 === 0 && el.length % 2 === 0;
    })
}
indexPairEtLongueurPaire(['lion', 'monkey', 'aardvaark', 'cat', 'doge']);


indexPairEtLongueurPaire(['red', 'green', 'purple', 'blue', 'yellow']);



//ex6

function deplacerZeros(nombres) {
    var n1 = filter(nombres, function (nombre) {
        return nombre === 0;
    });
    var n2 = filter(nombres, function (nombre) {
        return nombre !== 0;
    });

    return n2.concat(n1);
}

deplacerZeros([2, 0, 3, 0, 40, 3, 6, 0, 10, 11]);

