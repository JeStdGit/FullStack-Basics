function superContactSolomon() {
    console.log('args:', arguments);

    let combined = []
    for (const arr of arguments) {
        combined = [...combined, ...arr]
    }

    console.log('combined:', combined);
}

superContactSolomon([1, 2, 5], [6, 7, 8], [20, 23, 25, 56])