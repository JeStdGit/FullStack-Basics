const person = {
    hasChildren: true,
    login() {
        console.log(this)
    },
    delay() {
        setTimeout(() => (ann.bind(this))(), 4000);
        console.log(this)
    }
}

function ann() {
    console.log(this)
}

person.delay()