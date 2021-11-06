/*
Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını bulan programı yazınız. 
*/
let total1 = 0
let total2 = 0
function friendNumber(number1, number2) {
    total1 = properDivisorsSum(number1)
    total2 = properDivisorsSum(number2)

    if (total1 == number2 && total2 == number1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")
    } else {
        console.log(number1 + " ve " + number2 + " arkadaş sayı değiller!")
    }
}

function properDivisorsSum(number) {
    let total = 0
    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            total += i
        }
    }

    return total
}

friendNumber(220, 284)