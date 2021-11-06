/*
1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
*/
let numbers = []
function isPerfectNumber(number) {
    let total = 0
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            total += i
        }

    }

    if (number === total) {
        numbers.push(number)
    }
}

function perfectNumbers() {
    for (let i = 1; i <= 1000; i++) {
        isPerfectNumber(i)
    }
    console.log(numbers)

}

perfectNumbers()
