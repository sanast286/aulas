* Passo 1: Configuração do HTML
Crie um novo arquivo HTML chamado index.html.
Adicione o esqueleto básico do HTML:
html

        <!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Jogo da Cobrinha</title>
            <style>
                canvas {
                    border: 1px solid #000;
                    display: block;
                    margin: 0 auto;
                }
            </style>
        </head>
        <body>
            <canvas id="snakeCanvas" width="400" height="400"></canvas>
            <script src="snake.js"></script>
        </body>
        </html>
* Passo 2: Inicialização do JavaScript
Crie um novo arquivo JavaScript chamado snake.js.
No arquivo snake.js, defina as variáveis globais:
javascript

        const canvas = document.getElementById("snakeCanvas");
        const ctx = canvas.getContext("2d");
        const box = 20; // Tamanho do quadrado
        let snake = []; // Array para armazenar as partes da cobra
        snake[0] = { x: 10 * box, y: 10 * box }; // Posição inicial da cobra
        let food = { x: Math.floor(Math.random() * 20) * box, y: Math.floor(Math.random() * 20) * box }; // Posição inicial da comida
        let d; // Direção da cobra
* Passo 3: Desenhando a Cobra e a Comida
Adicione funções para desenhar a cobra e a comida no canvas:
javascript

        function drawSnake() {
            // Desenha a cobra
        }

        function drawFood() {
            // Desenha a comida
        }
* Passo 4: Movimentando a Cobra
Adicione um evento de teclado para controlar o movimento da cobra:
javascript

        document.addEventListener("keydown", direction);

        function direction(event) {
            // Define a direção da cobra com base na tecla pressionada
        }
* Passo 5: Atualizando o Jogo
Adicione a função draw() para atualizar o jogo a cada frame:
javascript

        function draw() {
            // Limpa o canvas
            // Desenha a cobra
            // Desenha a comida
            // Move a cobra
            // Verifica se a cobra comeu a comida
            // Atualiza a posição da comida
        }
* Passo 6: Executando o Jogo
Inicialize o jogo chamando a função init():
javascript

        function init() {
            // Inicializa o loop do jogo
        }

        init(); // Chama a função init() para iniciar o jogo
