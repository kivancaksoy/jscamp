/*
1- JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
*/

let myArray
function findPrime(...numbers) {
    findPrimeForArray(numbers)
}


//Tek sayı için asallık kontrolü.
let isPrime;
function findPrimeSubFunc(number) {
    if (number >= 2) {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false
                break
            } else {
                isPrime = true
            }
        }

        if (isPrime == true || number == 2) {
            console.log(number + " sayısı asaldır.")
        } else {
            console.log(number + " sayısı asal değildir!")
        }
    } else {
        console.log(number + " sayısı asal değildir.")
    }


}


//array'deki sayılar için tek tek kontrol.
function findPrimeForArray(array) {
    for (let i = 0; i < array.length; i++) {
        findPrimeSubFunc(array[i])
    }


}

findPrime(-4, -3, -2, -1, 0, 1, 2, 3, 4, 123, 1234)