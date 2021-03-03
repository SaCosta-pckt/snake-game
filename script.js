let canvas = document.getElementById("snake");
/* contexto renderiza o desenho que vai acontecer no canvas - indicamos plano 2d*/
let context = canvas.getContext("2d");
let box = 32;
let snake=[];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

/* Criar background - fillreact desenha o retangulo x y altura e largura*/
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for (i=0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}
criarBG();
criarCobrinha();