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

function jogando(e){
	
	var btn_0 = document.getElementById(e);
	btn_0.innerHTML = play_da_vez;
	btn_0.style.background = "lightblue";
	audio_sair(5);
	l.splice(valor_do_botao(e),1,play_da_vez)
	troca_play();
	finalizar_partida()
	
	

}

//    Array.splice(inicio, removeCount, novoItem, novoItem, novoItem, ...)

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

function finalizar_partida(){
	if (l[0] == l[1] && l[1] == l[2] && l[1] != ""){
		window.location.href="resultado.html";
	}
	/*
	l[0] == l[3] == l[6] != "" ||
	if l[6] == l[7] == l[8] || l[2] == l[5] == l[8]{
		alert("acabou");
	}
	if l[0] == l[4] == l[8] || l[2] == l[4] == l[6]{
		alert("acabou");
	} */
	
}

function troca_play(){
	if( play_da_vez == "X"){
		play_da_vez="O"
	}else{
		play_da_vez="X"
	}
}

function nome_dos_playes(){
	var nome_play1 = document.getElementById('input_play1').value;	
	var nome_play2 = document.getElementById('input_play2').value;
	
	
/*	if (nome_play1==""){
		nome_play1="Player 1"
	}if (nome_play2==""){
		nome_play1="Player 2"
	}
	alert(nome_play1);
	if (nome_play1 =="Player 1") {
		nome_play1.inner.HTML("ola")
	}*/
}

//nome_dos_playes()

/*
function clickTeclado(letra) {
  alert(letra);
}

<button class="teclado" id="qTeclado" onClick="clickTeclado(this.value);" value="Q">Q</button>
*/
