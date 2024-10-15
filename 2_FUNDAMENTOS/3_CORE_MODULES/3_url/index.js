const url = require('url')
const address = 'https://www.julianohs.com.br/catalogo?produtos=notebook'
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))