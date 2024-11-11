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
let rndNum = 0

for (let words of wordsArr) {
    rndNum = Math.floor(Math.random() * 8);
    poem = poem.concat(" ",words[rndNum])
}

document.getElementById("p1").innerHTML = poem;

const button = document.getElementById("p1button");
const p1div = document.getElementById("p1div");

p1div.style.left = Math.floor(Math.random() * (window.innerWidth - 250)) + "px";
p1div.style.top = Math.floor(Math.random() * (window.innerHeight - 50)) + "px";

button.addEventListener("click", () => {
    p1div.style.left = Math.floor(Math.random() * (window.innerWidth - 250)) + "px";
    p1div.style.top = Math.floor(Math.random() * (window.innerHeight - 50)) + "px";
})