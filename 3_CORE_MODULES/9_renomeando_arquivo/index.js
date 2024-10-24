const fs = require('fs')

fs.rename('arquivo.txt', 'novo_arquivo.txt', function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Arquivo renomeado!')
})