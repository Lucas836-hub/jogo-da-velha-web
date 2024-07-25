function sorte() {

	var valor=getRandomInt(2);
	play_2()
	troca_imagem(valor)

	document.querySelector(".moeda").style.display = "none";
	document.querySelector(".dados_sorteado").style.display = "inline-block";

	colocar_nomes(valor)

	sessionStorage.setItem("quem_vai_comeca",valor);
	setTimeout(prox_frame, 2500);//proximo frame
}

function prox_frame(){
	window.location.href="campo-de-batalha.html";
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function play_2(){
	// identifica se a imagem do player 2 se vai ser humano ou robo
	var jkl = contra_boot
	if (jkl == "true") {
		imagem_play_2="src/imagens/imagem-2_80";
		
	}else{
		
		var tipo_boot=getRandomInt(2)
		if (tipo_boot == 2) {
			imagem_play_2="src/imagens/robo-2_80";
		}else{
			imagem_play_2="src/imagens/robo-3_80";
		}
	}
}

function troca_imagem(v){
	if (v == 0) {
		document.getElementById('player_sorteado').src="src/imagens/imagem-1_80.png";
		
	}
	else{
		document.getElementById('player_sorteado').src=imagem_play_2+".png";
		
	}
}

function colocar_nomes(v){
	var nome_play = document.getElementById("nome_do_play");

	if (v == 0) {
		var n_p = String(sessionStorage.getItem("save_nome_play_1"))
		if(n_p != null && n_p != ''){
			nome_play.innerHTML = n_p+" irá começar";
		}else{
			nome_play.innerHTML = "O Player 1 irá começar";
		}


	}
	
	if (v == 1) {
		var n_p = String(sessionStorage.getItem("save_nome_play_2"))
		if(n_p != null && n_p != ''){
			nome_play.innerHTML = n_p+" irá começar";
		}else{
			var jkl = String(sessionStorage.getItem("tipo_p"))
		if (jkl == "true") {
					nome_play.innerHTML = "O Player 2 irá começar";
				sessionStorage.setItem("save_nome_play_2","Player 2");
			} else {
				sessionStorage.setItem("save_nome_play_2","Robô");
				nome_play.innerHTML = "O Robô irá começar";
				}
		}
	}
}


var imagem_play_2="";
var contra_boot =String(sessionStorage.getItem("tipo_p"));

document.querySelector(".dados_sorteado").style.display = "none";
setTimeout(sorte, 2000);