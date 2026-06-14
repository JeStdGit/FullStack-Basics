const basicColors = ["red", "green", "blue"]
const colors = ["pink", "orange", "black"]

const combinedArrays = basicColors.concat(colors)

console.log("ES5", combinedArrays);


const combinedArraysES6 = [...basicColors, ...colors]

console.log("ES6", combinedArraysES6);

const combinedArraysES6WithAddition = [...basicColors, "purple", ...colors, "violet"]

console.log(combinedArraysES6WithAddition);


const chat = {
    llm: "gpt4o-mini",
    temperature: 0.1,
    top_p: 0.9
}

const genAI = {
    server: "MCP",
    agent: "Antropic"
}

const combinedObjects = {
    ...chat, ide: "cursor", ...genAI, language: "pyton"
}