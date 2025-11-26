// console.log("empezamos")
//  Abre el archivo `index.html` en tu navegador.
//OK. 2. Introduce un número del 1 al 3 en el campo de entrada.---> SACAR VALOR DEL IMPUT ->
// OK. 3. El juego se iniciará automáticamente con una cuenta atrás de 5 segundos. ---> crear CUENTA ATRAS
//  OK.CREAR NUM ALEATORIO CON MATCH.FLOOR Y MATH RAMDOM *3)+1
// 4. Después de la cuenta atrás, el juego evaluará el número introducido. --- > COMPARAR LOS NUMEROS Y DECIR SI SON IGUALES O NO
// 5. Se mostrará un mensaje indicando si has salvado el mundo o si la bomba ha estallado.

const userInput = document.getElementById("userInput");
const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

let numerousuario = 0;

function numAleatorio() {
  return Math.floor(Math.random() * 3) + 1;
}

function contadorReverso() {
  let contador = 5;
  countdown.innerText = contador;
  const intervalo = setInterval(() => {
    contador--;
    countdown.innerText = contador;
    if (contador === 0) {
      clearInterval(intervalo);
      resultado();
    }
  }, 1000);
}

userInput.addEventListener("change", () => {
  numerousuario = parseInt(userInput.value, 10);
  // iniciar la cuenta atrás solo si el número es válido
  if (numerousuario >= 1 && numerousuario <= 3) {
    resultado.innerHTML = ""; // limpiar resultado previo
    contadorReverso();
  } else {
    alert("Por favor introduce un número entre 1 y 3");
  }
});

function resultado() {
  const number = numAleatorio(); // número aleatorio del juego
  let mensaje = "";

  if (number === numerousuario) {
    mensaje = `<h2>¡HAS DESACTIVADO LA BOMBA!</h2>
               <p>Has elegido el cable número: ${numerousuario}</p>
               <p>El cable bomba era el: ${number}</p>`;
  } else {
    mensaje = `<h2>BOOM!!! CABLE EQUIVOCADO</h2>
               <p>Has elegido el cable número: ${numerousuario}</p>
               <p>El cable bomba era el: ${number}</p>`;
  }

  result.innerHTML = mensaje;
}

// Reiniciar juego
restart.addEventListener("click", () => {
  location.reload();
});