//funciones de e una cALCULADORA
//funcion para mostrar en pantalla

const panel = document.querySelector(".panel"); //selecciona el panel de la calculadora
const botones = document.querySelectorAll(".boton"); //selecciona todos los botones de la calculadora

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const contenidoPanel = boton.textContent;
    
    if (contenidoPanel === "=") {
      CalculadorResultado();
    } else if (contenidoPanel === "C") {
      panel.textContent = null;
    } else {
      panel.textContent += contenidoPanel;
    } 
  });
});

function CalculadorResultado() {
  const resultado = eval(panel.textContent); 
  panel.textContent = resultado;
}
