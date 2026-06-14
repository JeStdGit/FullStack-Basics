const numbers = [1, 2, 3, 4, 5, 6, 7]

const sum = numbers.reduce((sum, current) => sum + current, 0)

console.log(sum);

function superContactSolomon(arr) {
    const initialArr = [90, 130, 110]
    const flat = arr.reduce(
        (prev, current) => [...prev, ...current], initialArr
    )

    console.log(flat);
}

superContactSolomon([[1, 2, 5], [6, 7, 8], [20, 23, 25, 56]])