let ComparaThis = function (param){
    console.log(this == param)

}
ComparaThis(global)
const obj ={}
    ComparaThis = ComparaThis.bind(obj)
    ComparaThis(global)
ComparaThis(obj)



let ComparaArrow =  param => console.log(this == param)
ComparaArrow(global)