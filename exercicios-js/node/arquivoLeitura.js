
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

const conteudo =fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo);
    console.log(`${config.teste.host}:${config.teste.port}`);
});




fs.readdir(__dirname, (err,arquivos) =>{
    console.log('Conteudo da pasta...')
    console.log(arquivos)
})
 

const config = require('./arquivo.json')
console.log(config.teste.host)