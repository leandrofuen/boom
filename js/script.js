// console.log("empezamos")
//  Abre el archivo `index.html` en tu navegador.
//OK. 2. Introduce un número del 1 al 3 en el campo de entrada.---> SACAR VALOR DEL IMPUT ->
// OK. 3. El juego se iniciará automáticamente con una cuenta atrás de 5 segundos. ---> crear CUENTA ATRAS
//  OK.CREAR NUM ALEATORIO CON MATCH.FLOOR Y MATH RAMDOM *3)+1
// 4. Después de la cuenta atrás, el juego evaluará el número introducido. --- > COMPARAR LOS NUMEROS Y DECIR SI SON IGUALES O NO
// 5. Se mostrará un mensaje indicando si has salvado el mundo o si la bomba ha estallado.


const userInput = document.getElementById("userInput")
const countdown = document.getElementById("countdown")
const result = document.getElementById("result")
const restart = document.getElementById("restart")



//1-1 - CREAMOS EL CONTADOR DE TIEMPO
//1-2 - esto SE TIENE QUE DISPARAR CUANDO ELIGAMOS NUMERO ASI K  TIENE QUE SER UN FUNCION EN EL LIST EVENT DE USER IMPUT.
//1-3 ya TENEMOS EL CONTADOR LLAMADO CONTADOR REVERSOL PARA LLAMARLO DENTRO DE LA FUNCION QUE ELIGE EL NUMERO,

// 1-4 VAMOA CREAR EL NUMERO ALEATORIO
/////////////////////1.4-//////////////////////////////////

let numAleatorio =() => Math.floor((Math.random()*3)+1)
let numerousuario = 0
/////------------1.4----------------------//////

//-------------1.1---------------//
function contadorReverso(){
 let contador = 5;
const intervalo = setInterval(() => {
  countdown.innerText =contador

  if (contador === 0) {
    countdown.innerText =contador;
        clearInterval(intervalo); // Detener el setInterval
  }

  contador--;
}, 1000); // 1000 ms = 1 segundo
}
//------------1.1-----------------//

//------------1.2 = cuando eligamos se ejecuta el contador, seleccionamos el numero de usuario
userInput.addEventListener("change",()=>{
contadorReverso()
numerousuario = userInput.value
resultado()
}
)
//--------------------------1.2-----------------------------//

//--------------------------1.5 FUNCION RESULTADO, ya el contaddor esta a 0 , tenemos el n.aleat, y mi numero ---//

function resultado(){
const numeroaleatorio5s = new Promise(resolve =>{
    setTimeout(()=>{
        resolve(numAleatorio())
        resultado().then(number=>{
    let mensaje = ""
    if (number == numerousuario){
        mensaje=`<h2>HAS DESACTIVADO LA BOMBA</h2><p>Has ELEGIDO EL CABLE NUMERO :${numerousuario}</p><p>EL CABLE BOMBA ERA EL:${number}</p>`
    }
    else{
        mensaje=`<h2>BOOM!!! CABLE EQUIVOCADO</h2><p>Has ELEGIDO EL CABLE NUMERO :${numerousuario}</p><p>EL CABLE BOMBA ERA EL:${number}</p>`
    }
    result.innerHTML =  mensaje
}

)
    },5000)
    
})
 console.log(numeroaleatorio5s)// DA TRAS 5 sEG
// Promise [[Prototype]] : 
// Promise[[PromiseState]] :  "fulfilled" [[PromiseResult]] :  1 <--- EL UNO ES EL NUMERO ALEATORIO
return numeroaleatorio5s
}
// FUNCION DEL PROFE QUE HACE QUE CUANDO TENGAMOS UN NUMERO lo comparaw22222




//---- BOTON RESTART----//
restart.addEventListener("click", () => {
  location.reload()
})

// LA FUNCION NOS DEVUELVE EL NUMERO ALEATORIO tras 5 SEG

