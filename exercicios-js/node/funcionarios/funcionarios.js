const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require('axios');

axios.get(url).then(response => {
    const funcionarios = response.data;

    // Filtra apenas as mulheres chinesas
    const mulher = funcionarios.filter(function(mulheres){ 
       return mulheres.pais === "China" && mulheres.genero === "F"
 });

    // Encontra a mulher chinesa com o maior salário
    const Maiorsalario = mulher.reduce(function(maior, atual) {
        if (maior.salario > atual.salario) {
            return maior;
        } else {
            return atual;
        }
    });

    console.log(mulher); // Exibe todas as mulheres chinesas
    console.log(Maiorsalario); // Exibe a mulher chinesa com o maior salário
});
