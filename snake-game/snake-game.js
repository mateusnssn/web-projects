window.onload = function()
{
    var stage = document.getElementById('stage');
    var context = stage.getContext("2d");
    document.addEventListener("keydown", KeyPush)

    setInterval(game, 60);

    const velocidade = 1; // Quantidade de casas que a cobrinha vai andar por vez.
    let velocidade_x = velocidade_y = 0;
    let snake_position_x = 10; let snake_position_y = 15;
    let tamanho_peca = 20;
    let quantidade_peca = 30;
    let apple_position_x = 15; let apple_position_y = 15;
    let trail = [];
    calda = 3;

    function game()
    {

        snake_position_x += velocidade_x;
        snake_position_y += velocidade_y;
        // Estas condicionais recolocam a cobrinha no campo do jogo caso ela saia do limite
        if(snake_position_x < 0){
            snake_position_x = quantidade_peca - 1;
        }if(snake_position_x > quantidade_peca - 1){
            snake_position_x = 0;
        }if(snake_position_y < 0){
            snake_position_y = quantidade_peca - 1;
        }if(snake_position_y > quantidade_peca - 1){
            snake_position_y = 0;
        }


        context.fillStyle = "#230A59";
        context.fillRect(0, 0, stage.width, stage.height);

        context.fillStyle = "#0029FA";
        context.fillRect(apple_position_x * tamanho_peca, apple_position_y * tamanho_peca, tamanho_peca, tamanho_peca);
        
        context.fillStyle = "#829FD9";
        for(let i = 0; i < trail.length; i++){
            context.fillRect(trail[i].x * tamanho_peca, trail[i].y * tamanho_peca, tamanho_peca - 1, tamanho_peca - 1);
            if(trail[i].x == snake_position_x && trail[i].y == snake_position_y){
                // Caso a cobrinha encoste nela mesma, as variáveis são redefinidas para o padrão.
                velocidade_x = velocidade_y = 0;
                calda = 3;
                ultimo_comando = null;
            }
        }

        trail.push({x:snake_position_x, y:snake_position_y})
        while(trail.length > calda){
            trail.shift();
        }
        if(apple_position_x == snake_position_x && apple_position_y == snake_position_y){
            calda++;
            apple_position_x = Math.floor(Math.random() * quantidade_peca);
            apple_position_y = Math.floor(Math.random() * quantidade_peca);
        }

    }
    var ultimo_comando; // Para evitar que o jogador perca caso tente ir para o lado oposto da cobrinha.
    var quantidade_de_vezes_que_o_ultimo_comando_foi_acionado = 2;
    function KeyPush(event){
        
        switch(event.keyCode){
            case 37: // Esquerda
                if(ultimo_comando != 39 && quantidade_de_vezes_que_o_ultimo_comando_foi_acionado > 1){
                    velocidade_x = - velocidade;
                    velocidade_y = 0;
                    resetar_contador_de_comandos(37);
                }
                    break;
            case 38: // Cima
                if(ultimo_comando != 40 && quantidade_de_vezes_que_o_ultimo_comando_foi_acionado > 1){
                    velocidade_x = 0;
                    velocidade_y = -velocidade;
                    resetar_contador_de_comandos(38);
                }
                break;
                case 39: // Direita
                if(ultimo_comando != 37 && quantidade_de_vezes_que_o_ultimo_comando_foi_acionado > 1){
                    velocidade_x = velocidade;
                    velocidade_y = 0;
                    resetar_contador_de_comandos(39);
                }
                break;
            case 40: // Baixo
                if(ultimo_comando != 38 && quantidade_de_vezes_que_o_ultimo_comando_foi_acionado > 1){
                    velocidade_x = 0;
                    velocidade_y = velocidade;
                    resetar_contador_de_comandos(40);
                }
                break;  
            default:
                break;  
        }
        ultimo_comando = event.keyCode;
        function resetar_contador_de_comandos(comando_recebido){
            if(comando_recebido == ultimo_comando){
                quantidade_de_vezes_que_o_ultimo_comando_foi_acionado++;
            }
        }
    }

} 