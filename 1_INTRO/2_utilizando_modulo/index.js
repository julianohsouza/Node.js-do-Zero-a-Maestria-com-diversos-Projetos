const fs = require('fs') // file system

fs.readFile('arquivo1.txt', 'utf8', (err, data) => {

    if (err) {
        console.log(err)
        return
    }

    console.log(data)
})