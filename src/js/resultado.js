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

var matriz=[];

var n_botao =0;

function preencher_frame(){
	preencher_play()
	preencher_tabela()
}

function preencher_play(){
	var nome_play = document.getElementById("name_win");
	var nm=String(sessionStorage.getItem("vencedor")).trim();
	nm=nm+"i";

	console.log("win",nm,"ol")

	if(nm == " Xi"){
		var n_p = String(sessionStorage.getItem("save_nome_play_1"))
		if(n_p != null){
			nome_play.innerHTML = n_p
		}else{
			nome_play.innerHTML = "Player 1"
		}
	}if (nm == 'O') {
		var n_p = String(sessionStorage.getItem("save_nome_play_2"))
		if(n_p != null){
			nome_play.innerHTML = n_p
		}else{
			nome_play.innerHTML = "Player 2"
		}
	} else {
		nome_play.innerHTML = "Velha"
	}
	
}

function preencher_tabela(){
	var tab = sessionStorage.getItem("matriz_final")
	console.log(tab)
	
	var i =0;
	while(i <= tab.length){
		var bt =document.getElementById("btn_"+n_botao);
		if (tab[i] != ',' && tab[i] != undefined) {
			/*console.log("tab ",tab[i])
			console.log("n botao ",n_botao)
			console.log(bt)*/
			bt.innerHTML=tab[i];
			n_botao++;
			i++;
		}else{
			bt.innerHTML="";
			n_botao++;
		}
		i++
	}
	audio_sair(5)
	
}


preencher_frame()

