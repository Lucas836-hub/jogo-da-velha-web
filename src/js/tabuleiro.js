function audio_sair(ms){
	var lista_audio_sair=["achoqueeutavabrincando.mp3","arregou.mp3","javaiboltz.mp3","masnaovemporqueehcagao.mp3","morri.mp3"]
 	var lista_audio_perdeu=["caixaocurto.mp3","choqueuva.mp3","erroufeioerrourude.mp3","eunaoassumoessebo.mp3","evilmortytema.mp3","faleceu.mp3","flautabugadatitanic.mp3","hellodarknessmyownfriend.mp3","hellodarknessmyownfriendfunk.mp3","impressionantecomovocestentammederrubar.mp3","isolados.mp3","jaacaboujessica.mp3","jubileuestaesquisitohoje.mp3","musicatristechaves1.mp3","musicatristenaruto.mp3","musicatristenarutofunk.mp3","musicatristexxxtentacion.mp3","naoconseguene.mp3","queotaeuvoudaota.mp3","sefodeugta.mp3","sefudeu.mp3","somfatality.mp3","souummerdamerdao.mp3","surprisemotherfucker.mp3","vemtranquilo.mp3","voceehretardadoporacaso.mp3","vocenaoehtaobomassimehumfracassado.mp3"]
 	var lista_audio_denovo=["cevaimorrer.mp3","horadoshow.mp3","mandarmatar.mp3","tasaindodajaulaomonstro.mp3","vemafobadoassimnao.mp3","voupegarminhamarreta.mp3"]

	var audio = new Audio('src/sons/audio interativo/sair/'+lista_audio_sair[getRandomInt(ms)]);
	audio.play();	
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var play_da_vez = "X"
var l =["","","","","","","","",""]
var cont_botao=0;
var prox_img=0;
var imagem_play_2="";
var contra_boot =String(sessionStorage.getItem("tipo_p"));
var vez_do_boot =true
console.log("matriz ",l);
colocar_nomes()
play_2()

function play_2(){
	// identifica se a imagem se vai ser humano ou robo
	var jkl = contra_boot
	console.log("jkl = ",jkl)
	if (jkl == "true") {
		console.log("o vei fei")
		imagem_play_2="src/imagens/imagem-2_80";
	}else{
		console.log("biitu")
		imagem_play_2="src/imagens/robo-3_80";
	}
	document.getElementById('troca_imagem_play_2').src=imagem_play_2+"_pb.png";
}

function jogando(e){
	console.log("e == ",e)
	var btn_0 = document.getElementById(e);
	if (l[valor_do_botao(e)] != "X" && l[valor_do_botao(e)] != "O") {
		console.log("next play = ",play_da_vez)
		btn_0.innerHTML = play_da_vez;
		l.splice(valor_do_botao(e),1,play_da_vez)
		btn_0.style.background = "lightblue";
		audio_sair(5);
		console.log("tentou audio")
		troca_play();
		cont_botao+=1;
		finalizar_partida()
		troca_imagem()
		//console.log(prox_img)
		//console.log("matriz ",l)
	}
	if (contra_boot == "false") {
		if (vez_do_boot) {
			vez_do_boot=false
			console.log("contra_boot ativado")
			setTimeout(boot_facil(), 3000);
			console.log("boot jogou")
			
		} else {
			vez_do_boot=true
		}
		
		}
}

//    Array.splice(inicio, removeCount, novoItem, novoItem, novoItem, ...)

function troca_imagem(){
	if (prox_img == 0) {
		document.getElementById('troca_imagem_play_1').src="src/imagens/imagem-1_80_pb.png";
		document.getElementById('troca_imagem_play_2').src=imagem_play_2+".png"
		prox_img=1
	}
	else{
		document.getElementById('troca_imagem_play_1').src="src/imagens/imagem-1_80.png";
		document.getElementById('troca_imagem_play_2').src=imagem_play_2+"_pb.png";
		prox_img=0
	}

}

function boot_facil(){
	// facil
	var parar=true;
	var tarncar=0
	if (true) {
		while(parar){
			var tentar=getRandomInt(8);
			console.log("boot vai jogar = ",tentar)
			if (l[tentar] != "X" && l[tentar] != "O") {
				jogando("btn_"+tentar);
				parar=false
				console.log("boot jogou")	
			}
			tarncar++;
			console.log("trancar == ",tarncar)
			if (tarncar>=12) {
				break
			}
		}
	}}

// em desenvolvimento
function boot_medio(){
	var tabuleiro=l;
	var icone="O"
	bloc=[[0,1,2],[0,2,1],[1,2,0] , [3,4,5],[3,5,4],[4,5,3]  ,[6,7,8],[6,8,7],[7,8,6] , [0,3,6],[0,6,3],[3,6,0]  ,  [1,4,7],[1,7,4],[4,7,1] ,[2,5,8],[2,8,5],[5,8,2],[0,4,8],[0,8,4],[4,8,0],[2,4,6],[2,6,4],[4,6,2]]
	var c=0;
	while(c <= 24){
		if(tabuleiro[bloc[c][0]] == tabuleiro[bloc[c][1]] && tabuleiro[bloc[c][1]] == icone && tabuleiro[bloc[c][0]] == icone){
			if (tabuleiro[bloc[c][2]] == ""){
				return bloc[c][2]
			}
		}
	}
	boot_facil()
}

function colocar_nomes(){
	var nome_play1 = document.getElementById("name_1_combt");
	var n_p = String(sessionStorage.getItem("save_nome_play_1"))
	if(n_p != null && n_p != ''){
		nome_play1.innerHTML = "__"+n_p
		console.log("np ",n_p)
	}
	
	var nome_play2 = document.getElementById("name_2_combt");
	var n_p = String(sessionStorage.getItem("save_nome_play_2"))
	if(n_p != null && n_p != ''){
		nome_play2.innerHTML = n_p
		console.log("foi")
		console.log(n_p," p1 ",sessionStorage.getItem("save_nome_play_2")," p2")
	}else{
		var jkl = String(sessionStorage.getItem("tipo_p"))
		if (jkl == "true") {
			nome_play2.innerHTML = "Player 2"
			sessionStorage.setItem("save_nome_play_2","Player 2");
		} else {
			sessionStorage.setItem("save_nome_play_2","Robô");
			nome_play2.innerHTML = "Robô"
		}
	}
}
function valor_do_botao(v){
	if(v == "btn_0"){
		return 0
	}if(v == "btn_1"){
		return 1
	}if(v == "btn_2"){
		return 2
	}if(v == "btn_3"){
		return 3
	}if(v == "btn_4"){
		return 4
	}if(v == "btn_5"){
		return 5
	}if(v == "btn_6"){
		return 6
	}if(v == "btn_7"){
		return 7
	}if(v == "btn_8"){
		return 8
	}
}

function enviar_resul(v){
	sessionStorage.setItem("matriz_final",l);
	sessionStorage.setItem("vencedor",v);
	}

function finalizar_partida(){
	//linha
	if (l[0] == l[1] && l[1] == l[2] && l[1] != ""){
		enviar_resul(l[1])
		sessionStorage.setItem("linha_win",0);
		window.location.href="resultado.html";
	}
	if(l[3] == l[4] && l[4] == l[5] && l[4] != ""){
		enviar_resul(l[4])
		sessionStorage.setItem("linha_win",1);
		window.location.href="resultado.html";
	}
	if(l[6] == l[7] && l[7] == l[8] && l[7] != ""){
		enviar_resul(l[7])
		sessionStorage.setItem("linha_win",2);
		window.location.href="resultado.html";
	}
	// coluna
	if(l[0] == l[3] && l[3] == l[6] && l[3] != ""){
		enviar_resul(l[3])
		sessionStorage.setItem("linha_win",3);
		window.location.href="resultado.html";
	}
	if(l[1] == l[4] && l[4] == l[7] && l[4] != ""){
		enviar_resul(l[4])
		sessionStorage.setItem("linha_win",4);
		window.location.href="resultado.html";
	}
	if(l[2] == l[5] && l[5] == l[8] && l[5] != ""){
		enviar_resul(l[5])
		sessionStorage.setItem("linha_win",5);
		window.location.href="resultado.html";
	}
	// cruzado
	if(l[0] == l[4] && l[4] == l[8] && l[4] != ""){
		enviar_resul(l[4])
		sessionStorage.setItem("linha_win",7);
		window.location.href="resultado.html";
	}
	if(l[2] == l[4] && l[4] == l[6] && l[4] != ""){
		enviar_resul(l[4])
		sessionStorage.setItem("linha_win",8);
		window.location.href="resultado.html";
	}	
	if( cont_botao == 9){
		enviar_resul("v")
		sessionStorage.setItem("linha_win",9);
		window.location.href="resultado.html";
	}
}

function troca_play(){
	if( play_da_vez == "X"){
		play_da_vez="O"
	}else{
		play_da_vez="X"
	}
}


