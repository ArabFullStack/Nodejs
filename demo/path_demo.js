const fs = require('fs')

const path = require('path')

let filePath = path.join(__dirname, 'demo.txt')

fs.readFile(filePath, 'utf8', (err, data) => {
    console.log(data)
})





//let fileExtension = path.extname(filePath)

//let basename = path.basename(filePath)

//console.log(basename)

