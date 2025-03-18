const imprimirResultado =  function(nota) {
    
    switch((nota)){
        case 10:
            case 9:
                console.log("execelente nota!")
                break
                case 8: case 7: case 6:
                    console.log("aprovado")
                    break
                    case 5: case 4: case 3:
                    console.log("Recuperacao")
                    default:
                    console.log("reprovado")
                    break
               
              
    }
}

imprimirResultado(10)
imprimirResultado(7)
imprimirResultado(5)
imprimirResultado(1)
imprimirResultado(20)