// com promisse
const http = require('http')

const getTurma = letra  => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
  return new Promise((resolve, reject)=>{
     http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado = resultado + dados
            })
            res.on('end', () => {
                try{
                    resolve(JSON.parse(resultado))

                }
                catch(e){
                    reject(e)
                }
            })
        })

  })
}



Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])

.then(turmaslegal=> [].concat(...turmaslegal))
.then(alunos=> alunos.map(alunos=> alunos.nome))
.then(nomes=> console.log(nomes))



