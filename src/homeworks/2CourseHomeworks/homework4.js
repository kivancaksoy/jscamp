/*
1000'e kadarki tüm asal sayıları listeleyen programı yazınız.
*/
let myArray = [2]
function primes(numbers) {
    for (let i = 2; i <= 1000; i++) {
        let isPrime = false
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false
                break
            } else {
                isPrime = true
            }
        }
        if (isPrime) {
            myArray.push(i)
        }

    }

    console.log(myArray)
}

primes()