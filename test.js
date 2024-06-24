const log = new Promise((resolve, reject) => { 
    console.log("meow")
    resolve("bruh")
}).then((meow) => { 
    console.log("then meow")
})

console.log("second meow")
