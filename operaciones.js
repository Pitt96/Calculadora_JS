// Obtener elementos HTML relevantes
const salidaPrincipal = document.querySelector('.salida_principal span');
const salidaSecundario = document.querySelector('.salida_secundario span');
const botones = document.querySelectorAll('.caja');

let operacion = '';
let resultado = 0;

// Agregar controladores de eventos a cada botón
botones.forEach(boton => {
boton.addEventListener('click', () => {
    const valorBoton = boton.querySelector('.botones').innerText;

    switch (valorBoton) {
        case 'C':
            operacion = '';
            resultado = 0;
            salidaSecundario.innerText = "";
            break;
        case 'DEL':
            operacion = operacion.slice(0, -1);
            if(operacion[operacion.length-1] =="+" || operacion[operacion.length-1]=="-" || operacion[operacion.length-1]=="*" || operacion[operacion.length-1] == "/" || operacion[operacion.length-1] == "%"){
                salidaSecundario.innerText = "";
            }else{
                resultado = eval(operacion);
                salidaSecundario.innerText = resultado;
                resultado = 0;
            }
            break;
        case '=':
            resultado = eval(operacion);
            operacion = '';
            salidaSecundario.innerText = "";
            break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '%':
            operacion += valorBoton;
            break;
        default:
            operacion += valorBoton;
            for (let i = 0; i < operacion.length; i++){
                if(operacion[i]=="+" || operacion[i]=="-" || operacion[i]=="*" || operacion[i] == "/" || operacion[i] == "%" && operacion[i+1]<=operacion.length){
                    resultado = eval(operacion);
                    salidaSecundario.innerText = resultado;
                    resultado = 0;
                }
            }
        break;
    }

    // Actualizar la salida principal y secundaria
    salidaPrincipal.innerText = resultado || operacion || '0';
    // salidaSecundario.innerText = operacion;
});
});

