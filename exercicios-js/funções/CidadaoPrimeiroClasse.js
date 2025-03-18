function fun1(){

}

const armazena = function fun1 (){
}

//-----------------------------------


 const array = [ function (a,b){
    return a+b
 }]
 console.log(array[0](2,3))

// -----------------------------------

 const obj = {}
 obj.falar = function(){
    return "opa"
 }
 console.log(obj.falar())
 //-------------------------------------
  function run (fun){
    fun()
  }
  run(function(){
    console.log("executando ----------")
  })
  // -----------------


  function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
  }

  soma(2,3)(5353)
  

  






 