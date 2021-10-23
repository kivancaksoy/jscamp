console.log("Merhaba Kodlama.io");

//JS type save degildir
let dolarBugun = 9.30
let dolarDun = 9.20;
dolarDun = "Ankara"

{
    let dolarDun = 9.10
}

console.log(dolarDun);

const euroDun = 11.2
//euroDun = 11 //Hatalı const sabit, değeri değiştirilmez

console.log(euroDun)

//array
//camelCasing
//PascalCasing
let konutKredileri = ["Konut kredisi","Emlak konut kredisi","Kamu konut kredisi","Özel konut kredisi"]

console.log("<ul>")
for(let i = 0; i<konutKredileri.length; i++){
    console.log("<li>" + konutKredileri[i] + "</li>")
}
console.log("</ul>")

{/* <ul>
    <li>Konut kredisi</li>
    <li>Emlak konut kredisi</li>
    <li>Kamu konut kredisi</li>
</ul > */}

console.log(konutKredileri)