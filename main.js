let adjective = ["average","sweltering","tasty","dapper",
    "false","supreme","quickest","funny","tightfisted"
];
let verb = ["arrive","number","sign","blink",
    "attempt","push","wriggle","order", "doubt"
];
let adverb = ["vainly","zestfully","blindly","questioningly",
    "directly","fervently","suddenly","finally","tensely"
];
let noun = ["fall","cherries","volleyball","relation",
    "locket","needle","spy","worm","channel"
];

let wordsArr = [adjective,noun,verb,adverb];
let poem = "The" ;
let rndmNum = 0
for (let words of wordsArr) {
    rndmNum = Math.floor(Math.random() * 8);
    poem = poem.concat(" ",words[rndmNum])
}

document.getElementById("p1").innerHTML = poem;
