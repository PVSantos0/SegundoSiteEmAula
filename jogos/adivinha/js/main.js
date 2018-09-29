var lifes = 3;
var score = 0;
var computerNumber = function() {
	var random = Math.floor(Math.random() * 5) + 1;
	return random;
}
// chamar o id que esta na html dentro de span
function imprimirValores(){
	document.getElementById('lifes').innerHTML = "<br>" + '<i class="fas fa-heart fa-2x"></i>'.repeat(lifes);
	document.getElementById('score').innerHTML = "<br>" + score;
}
// a função result(escolha) é inicio do jogo só quando ouver o click no botão
function result(escolha){
	var random = computerNumber();
	var escolhaUsuario = escolha;
	// quando a escolha certa
	if(escolhaUsuario == random) {
		score = score + 5;
		document.getElementById('result').innerHTML = 'Parabéns, tu acertaste!!';
		document.getElementById('score').innerHTML = "<br>" + score;
		if(score >= 5){
		document.getElementById('result').innerHTML = 'Parabéns, tu ganhou um coração!!';
		lifes++;
		document.getElementById('lifes').innerHTML = "<br>" + '<i class="fas fa-heart fa-2x"></i>'.repeat(lifes);
		}
	} else {
	// quando a escolha for errada
		lifes--;
		document.getElementById('result').innerHTML ='N° da maquina: ' + random;
		if(lifes <= 0){
		 document.getElementById('lifes').innerHTML = "<br>" + 'Game Over!!! <br> <i class="fas fa-skull fa-2x"></i>';
		} else {
		 document.getElementById('lifes').innerHTML = "<br>" + '<i class="fas fa-heart fa-2x"></i>'.repeat(lifes);
		}
	}
}

function restart(){
	lifes = 3;
	score = 0;
	imprimirValores();
}

// var audio new Audio ('aqui vai onde esta o audio') e apos onde quer que ele toque coloque audio.play