window.onload = function() {

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);

    setInterval(game, 120);

    const vel = 1; // Velocidade definida a cada vez que for chamada a função game

    var vx = vy = 0; // Velocidade inicial X = horizontal Y = vertical
    var px = 10; // Ponto inicial do game 
    var py = 15; // Ponto inicial do game 
    var tp = 30; // Tamanho do quadrado do movimento da cobrinha
    var qp = 20; // Quantidade de peças na horizontal e vertical do tabuleiro
    var ax = ay = 15; // Posição inicial do ponto

    var trail = []; //Rastro da cobra
    tail = 5; //Calda 


    function game() {
        px += vx;
        py += vy;
        if (px < 0) {
            px = qp - 1;
        }
        if (px > qp - 1) {
            px = 0;
        }
        if (py < 0) {
            py = qp - 1;
        }
        if (py > qp - 1) {
            py = 0;
        }


        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, stage.width, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax * tp, ay * tp, tp, tp);

        ctx.fillStyle = "gray";
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);

            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0;
                tail = 5;
            }
        }
        trail.push({ x: px, y: py })
        while (trail.length > tail) {
            trail.shift();
        }

        if (ax == px && ay == py) {
            tail++;
            ax = Math.floor(Math.random() * qp);
            ay = Math.floor(Math.random() * qp);
        }

    }

    function keyPush(event) {

        switch (event.keyCode) {
            case 37: //Tecla esquerda
                vx = -vel;
                vy = 0;
                break;
            case 38: // Tecla para cima
                vx = 0;
                vy = -vel;
                break;
            case 39: // Tecla para direita
                vx = vel;
                vy = 0;
                break;
            case 40: // Tecla para baixo
                vx = 0;
                vy = vel;
            default:
                break;
        }
    }









}