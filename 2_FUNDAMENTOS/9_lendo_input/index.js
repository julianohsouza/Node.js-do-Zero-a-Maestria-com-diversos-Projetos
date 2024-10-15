const readline = require('readline').createInterface({
input: process.stdin,
output: process.stdout,
})

readline.question("Qual a sua linguagem preferida? ", (language) => {
    if(language === 'ABAP') {
    console.log("Melhor linguagem do mundo!!!")
    } else {
    console.log("Você precisa aprender ABAP")
    }
    
    readline.close()
})
