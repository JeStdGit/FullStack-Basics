let catVoice = "Miaow"
let dogVoice = "Woof"
let birdVoice = "Tweet tweet"

let songName = "Halleluja"
let song = "The cat sings " + songName
let modernSong = `The cat sings ${songName} and the bird sings ${birdVoice}`

const animalsVoice = {
    catVoice,
    dogVoice,
    birdVoice,
    print() {
        console.log(this)
    }
}

animalsVoice.print.apply()

// const logFromGlobal = animalsVoice.log
// logFromGlobal()
console.log(this)