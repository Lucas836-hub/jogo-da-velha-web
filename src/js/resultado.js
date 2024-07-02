function reproduzir_audio(faixa){
	var lista_audio_sair=["achoqueeutavabrincando.mp3","arregou.mp3","javaiboltz.mp3","masnaovemporqueehcagao.mp3","morri.mp3"]
 	var lista_audio_perdeu=["caixaocurto.mp3","choqueuva.mp3","erroufeioerrourude.mp3","eunaoassumoessebo.mp3","evilmortytema.mp3","faleceu.mp3","flautabugadatitanic.mp3","hellodarknessmyownfriend.mp3","hellodarknessmyownfriendfunk.mp3","impressionantecomovocestentammederrubar.mp3","isolados.mp3","jaacaboujessica.mp3","jubileuestaesquisitohoje.mp3","musicatristechaves1.mp3","musicatristenaruto.mp3","musicatristenarutofunk.mp3","musicatristexxxtentacion.mp3","naoconseguene.mp3","queotaeuvoudaota.mp3","sefodeugta.mp3","sefudeu.mp3","somfatality.mp3","souummerdamerdao.mp3","surprisemotherfucker.mp3","vemtranquilo.mp3","voceehretardadoporacaso.mp3","vocenaoehtaobomassimehumfracassado.mp3"]
 	var lista_audio_denovo=["cevaimorrer.mp3","horadoshow.mp3","mandarmatar.mp3","tasaindodajaulaomonstro.mp3","vemafobadoassimnao.mp3","voupegarminhamarreta.mp3"]
	// faixa == qual faixa acima
	var ms=0
 	if (faixa==0) {
		var audio = new Audio('src/sons/audio interativo/sair/'+lista_audio_sair[getRandomInt(ms)]);
		audio.play();
	}if (faixa==1) {
		var audio = new Audio('src/sons/audio interativo/perdeu/'+lista_audio_sair[getRandomInt(ms)]);
		audio.play();
	}if (faixa==2) {
		ms=5
		var audio = new Audio('src/sons/audio interativo/denovo/'+lista_audio_sair[getRandomInt(ms)]);
		audio.play();
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var matriz=[];
var l=[];
var n_botao =0;

function preencher_frame(){
	preencher_play()
	preencher_tabela()
	colorir()
}

function preencher_play(){
	var nome_play = document.getElementById("name_win");
	var nm=String(sessionStorage.getItem("vencedor").trim());

	console.log("win",nm,"ol")

	console.log("o nome do play = ",n_p)

	if(nm =="X"){

		document.getElementById('troca_imagem_play_win').src="src/imagens/imagem-1_80.png";
		var n_p = String(sessionStorage.getItem("save_nome_play_1"))
		if(n_p != null && n_p != ""){
			nome_play.innerHTML = n_p+" é o vencedor"
		}else{
			nome_play.innerHTML = "Player 1 é o vencedor"
		}
	}if (nm == 'O') {
		// imagem

		var n_p = String(sessionStorage.getItem("save_nome_play_2"))
		console.log("nome do play = ",n_p)
		
		var imagem_play_2="";
		var jkl = String(sessionStorage.getItem("tipo_p"))

		if (jkl == "true") {
			console.log("o vei fei")
			document.getElementById('troca_imagem_play_win').src="src/imagens/imagem-2_80.png";
		}else{
			console.log("biitu")
			document.getElementById('troca_imagem_play_win').src="src/imagens/robo-4_80.png";
		}
		// nome 

		if(n_p != null && n_p != ""){
			nome_play.innerHTML = n_p+" é o vencedor"
		}else{
			nome_play.innerHTML = "Player 2 é o vencedor"
		}
	} if (nm == "v"){

		document.getElementById('troca_imagem_play_win').src="src/imagens/ts_100.png";
		nome_play.innerHTML = "Deu Velha"
	}
	
}


function preencher_tabela(){
	var tab = sessionStorage.getItem("matriz_final")
	console.log(tab)
	
	var i =0;
	while(i <= tab.length){
		var bt =document.getElementById("btn_"+n_botao);
		if (tab[i] != ',' && tab[i] != undefined) {
			bt.innerHTML=tab[i];
			l.splice(n_botao,1,tab[i])
			n_botao++;
			i++;
		}else{
			bt.innerHTML="";
			n_botao++;
		}
		i++
	}
	
}

function jogar_novamente(){
	reproduzir_audio(2)
	window.location.href="campo-de-batalha.html";
}

function colorir(){
	var tab = Number(sessionStorage.getItem("linha_win"));
	console.log("linha ganhou ",tab)

	var linhas_win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
	if (tab != 8) {
		for (var i = 0; i < 3; i++) {
			console.log("valor wini ",linhas_win[tab][i])
			console.log("lista da linha ",linhas_win[tab])
				var bt =document.getElementById("btn_"+linhas_win[tab][i]);
				bt.style.background = "lightgreen";
				console.log(" i == ",i)
			}
		}
}


preencher_frame()

