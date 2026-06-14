const arr = ["I", "am", "a", "teacher", 23, true, undefined]

for (value in arr) {
    console.log(value, arr[value])
}

for (value of arr) {
    console.log(value)
}
