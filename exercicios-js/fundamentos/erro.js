function TratarErroElancar(erro){
    throw new Error(" eerro ")
}

function imprimirNomeGritado (obj){
    try{
        console.log(obj.name.toUpperCase()+ "!!!")

    } catch (e){
        TratarErroElancar(e)
    } finally {
        console.log("FINAAAAAAAAAAAAAAAAAAAAALLL")
    }
    
}
const obj = {name: "Roberto" } 
imprimirNomeGritado(obj)