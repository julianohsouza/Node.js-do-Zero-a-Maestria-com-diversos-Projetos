const http = require('http')

const port = 2000

const server = http.createServer((req, res) => {
  res.write('Olá HTTP')
  res.end()
})

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})