function reproduzir_audio(faixa){
	var lista_audio_sair=[['achoqueeutavabrincando.mp3',2000],['morri.mp3',1000],['masnaovemporqueehcagao.mp3',2000],['javaiboltz.mp3',1000],['arregou.mp3',2000]]
 	var lista_audio_perdeu=[['musicatristenaruto.mp3',6000],['faleceu.mp3',1000],['souummerdamerdao.mp3',3000],['hellodarknessmyownfriendfunk.mp3',6000],['choqueuva.mp3',2000],['somfatality.mp3',2000],['naoconseguene.mp3',2000],['caixaocurto.mp3',7000],['musicatristenarutofunk.mp3',6000],['jubileuestaesquisitohoje.mp3',4000],['surprisemotherfucker.mp3',2000],['eunaoassumoessebo.mp3',2000],['voceehretardadoporacaso.mp3',5000],['vemtranquilo.mp3',2000],['impressionantecomovocestentammederrubar.mp3',4000],['queotaeuvoudaota.mp3',1000],['flautabugadatitanic.mp3',6000],['sefudeu.mp3',1000],['evilmortytema.mp3',7000],['musicatristexxxtentacion.mp3',6000],['vocenaoehtaobomassimehumfracassado.mp3',3000],['isolados.mp3',5000],['sefodeugta.mp3',4000],['hellodarknessmyownfriend.mp3',7000],['jaacaboujessica.mp3',1000],['erroufeioerrourude.mp3',3000]]
 	var lista_audio_denovo=[['tasaindodajaulaomonstro.mp3',2500],['horadoshow.mp3',2000],['vemafobadoassimnao.mp3',2000],['voupegarminhamarreta.mp3',4000],['mandarmatar.mp3',4000],['cevaimorrer.mp3',1000]]
 	var lista_audio_empate=[['ehtabom.mp3',1000],['finalarnold.mp3',6000],['flautabugadaharrypotter.mp3',3000],['arredadaqui.mp3',3000],['masvocenaotemvergonha.mp3',1000],['badumtss.mp3',1000],['finalarnoldfunk.mp3',6000],['buttercup.mp3',4000],['manocetemdemencia.mp3',3000],['algumidiota.mp3',1000],['maisoumenos.mp3',5000],['vaitelascararrombado.mp3',2000],['todomundomorreu.mp3',2000],['aindabem.mp3',1000],['somdirectedbyrobert.mp3',6000]]
 	var lista_audio_ganhou=[['johncena.mp3',6000],['turndownforwhat.mp3',7000],['dorime.mp3',10000],['vouresumircomduaspalavrasparabens.mp3',3000],['shootingstars.mp3',7000],['taffareeeeeeel.mp3',9000],['machistaopressor.mp3',11000],['etetra.mp3',10000],['missaocompletagtasanandreas.mp3',6000],['sweetdreamsfunk.mp3',10000],['patomaloqueiro.mp3',14000],['musicagarrafa.mp3',8000],['smokeweedeveryday.mp3',10000],['dorimeremix.mp3',10000],['ibelieveicanfly.mp3',7000],['alienx.mp3',12000],['whenyousmile.mp3',10000],['ceehobichaomesmoheindoido.mp3',1000]]

	// faixa == qual faixa acima ^
	var ms=0
	var anterior="";
	var semfim=0; // essa porcaria nao aceita while true :(
	var prox_musi=true;
	var val_1='';
	var val_2='';

	if (com_som) {

		// carregar audios
 		if (faixa==0) {
	 		ms=5;

 			anterior=sessionStorage.getItem("ultimo_sair");

 			for (var i = 0; i < anterior.length; i++) {
 				if (anterior[i] != ",") {
 					if (prox_musi) {
 						val_1+=anterior[i];
 					}else{
 						val_2+=anterior[i];
 					}
 				}
 				else{
 					prox_musi=false
 				}
 			}

 			while (semfim != 1) {
 				ale_sair=getRandomInt(ms)	
 				if (val_1 != String(ale_sair) && val_2 != String(ale_sair)){
 					break;
 				}
 			}

 			val_1=val_2
 			val_2=ale_sair

			audio_sair = new Audio('src/sons/sair/'+lista_audio_sair[ale_sair][0]);
			sessionStorage.setItem("ultimo_sair",val_1+","+val_2);
			audio_sair.load();
		
		}if (faixa==1) {
			ms=26;
			
 			anterior=sessionStorage.getItem("ultimo_perdeu")

 			for (var i = 0; i < anterior.length; i++) {
 				if (anterior[i] != ",") {
 					if (prox_musi) {
 						val_1+=anterior[i];
 					}else{
 						val_2+=anterior[i];
 					}
 				}
 				else{
 					prox_musi=false
 				}
 			}

 			while (semfim != 1){
 				ale_perdeu=getRandomInt(ms)	
 				if (val_1 != String(ale_perdeu) && val_2 != String(ale_perdeu)){
 					break;
 				}
 			}

 			val_1=val_2
 			val_2=ale_perdeu

			audio_perdeu = new Audio('src/sons/perdeu/'+lista_audio_perdeu[ale_perdeu][0]);
			sessionStorage.setItem("ultimo_perdeu",ale_perdeu);
			audio_perdeu.load();
		
		}if (faixa==2) {
			ms=7
			
 			anterior=sessionStorage.getItem("ultimo_denovo")

 			for (var i = 0; i < anterior.length; i++) {
 				if (anterior[i] != ",") {
 					if (prox_musi) {
 						val_1+=anterior[i];
 					}else{
 						val_2+=anterior[i];
 					}
 				}
 				else{
 					prox_musi=false
 				}
 			}

 			while (semfim != 1){
 				ale_denovo=getRandomInt(ms)	
 				if (val_1 != String(ale_denovo) && val_2 != String(ale_denovo)){
 					break;
 				}
 			}

 			val_1=val_2
 			val_2=ale_denovo

			audio_denovo = new Audio('src/sons/denovo/'+lista_audio_denovo[ale_denovo][0]);
			sessionStorage.setItem("ultimo_denovo",ale_denovo);
			audio_denovo.load();
			
		}if (faixa==3) {
			ms=15
			
 			anterior=sessionStorage.getItem("ultimo_empate")

 			for (var i = 0; i < anterior.length; i++) {
 				if (anterior[i] != ",") {
 					if (prox_musi) {
 						val_1+=anterior[i];
 					}else{
 						val_2+=anterior[i];
 					}
 				}
 				else{
 					prox_musi=false
 				}
 			}

 			while (semfim != 1){
 				ale_empate=getRandomInt(ms)	
 				if (val_1 != String(ale_empate) && val_2 != String(ale_empate)){
 					break;
 				}
 			}

 			val_1=val_2
 			val_2=ale_empate

			audio_empate = new Audio('src/sons/empate/'+lista_audio_empate[ale_empate][0]);
			sessionStorage.setItem("ultimo_empate",ale_empate);
			audio_empate.load();
			
		}if (faixa==4) {
			ms=18;
			
 			anterior=sessionStorage.getItem("ultimo_ganhou")

 			for (var i = 0; i < anterior.length; i++) {
 				if (anterior[i] != ",") {
 					if (prox_musi) {
 						val_1+=anterior[i];
 					}else{
 						val_2+=anterior[i];
 					}
 				}
 				else{
 					prox_musi=false
 				}
 			}

 			while (semfim != 1){
 				ale_ganhou=getRandomInt(ms)	
 				if (val_1 != String(ale_ganhou) && val_2 != String(ale_ganhou)){
 					break;
 				}
 			}

 			val_1=val_2
 			val_2=ale_ganhou

			audio_ganhou = new Audio('src/sons/ganhou/'+lista_audio_ganhou[ale_ganhou][0]);
			duracao_audio=lista_audio_ganhou[ale_ganhou][1]
			sessionStorage.setItem("ultimo_ganhou",ale_ganhou);
			audio_ganhou.load();
			
		}
		// pausar audios
		if (faixa==5) {
			audio_ganhou.pause();
			audio_empate.pause();
			audio_perdeu.pause();
		}

		// reproduzir audios
		if (faixa==10) {
			duracao_audio=lista_audio_sair[ale_sair][1]
			audio_sair.play();
		}
		if (faixa==11) {
			duracao_audio=lista_audio_perdeu[ale_perdeu][1]
			audio_perdeu.play();
		}
		if (faixa==12) {
			duracao_audio=lista_audio_denovo[ale_denovo][1]
			audio_denovo.play();
		}
		if (faixa==13) {
			duracao_audio=lista_audio_empate[ale_empate][1]
			audio_empate.play();
		}
		if (faixa==14) {
			duracao_audio=lista_audio_ganhou[ale_ganhou][1]
			audio_ganhou.play();
		}
	}
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var audio_sair = null;
var audio_perdeu = null;
var audio_denovo = null;
var audio_empate = null;
var audio_ganhou = null;

var ale_sair=0;
var ale_perdeu=0;
var ale_denovo=0;
var ale_empate=0;
var ale_ganhou=0;


var com_som=true;
var duracao_audio=0
var fim = false;
var play_da_vez = "X"
var l =["","","","","","","","",""]
var cont_botao=0;
var prox_img=0;
var imagem_play_2="";
var contra_boot =String(sessionStorage.getItem("tipo_p"));
var vez_do_boot =true
var tipo_boot=0;
var controle_botao=true//evitar bug 
//console.log("matriz ",l);
colocar_nomes()
play_2()

reproduzir_audio(0)
reproduzir_audio(1)
reproduzir_audio(2)
reproduzir_audio(3)
reproduzir_audio(4)

//btn_jogar_denovo
document.querySelector(".btn-menu_2").style.display = "none";
document.querySelector(".config-play_1 .confete").style.display = "none";


function correcao_bug(){
	for (var i = 0; i < 9; i++) {
		var btn_0 =document.getElementById("btn_"+i);
		btn_0.innerHTML = "_";
		btn_0.style.color = '#e9e9ed';
	}
}

correcao_bug()


function play_2(){
	// identifica se a imagem se vai ser humano ou robo
	var jkl = contra_boot
	//console.log("jkl = ",jkl)
	if (jkl == "true") {
		//console.log("o vei fei")
		imagem_play_2="src/imagens/imagem-2_80";
	}else{
		tipo_boot=getRandomInt(2)
		//console.log("biitu")
		if (tipo_boot == 2) {
			imagem_play_2="src/imagens/robo-2_80";
		}else{
			imagem_play_2="src/imagens/robo-3_80";
		}
	}
	document.getElementById('troca_imagem_play_2').src=imagem_play_2+"_pb.png";
}

function jogando(e){
	if (fim != true) {
		//console.log("e == ",e)
		if (controle_botao) {
			controle_botao=false
			var btn_0 = document.getElementById(e);
			if (l[valor_do_botao(e)] != "X" && l[valor_do_botao(e)] != "O") {
				l.splice(valor_do_botao(e),1,play_da_vez)
				//console.log("next play = ",play_da_vez)
				btn_0.innerHTML = play_da_vez;
				btn_0.style.color = "black";
				btn_0.style.background = "lightblue";
				//audio_sair(5);
				//console.log("tentou audio")
				troca_play();
				cont_botao+=1;
				finalizar_partida()
				troca_imagem()
				//console.log(prox_img)
				//console.log("matriz ",l)
			}else{
				vez_do_boot=false
			}
			if (contra_boot == "false") {
				if (vez_do_boot) {
					vez_do_boot=false
					//console.log("contra_boot ativado")
					if(tipo_boot ==2) {
						setTimeout(boot_facil, 500);
					}if(tipo_boot ==1){
						setTimeout(boot_medio, 500);
					}if(tipo_boot ==0){
						setTimeout(boot_dificil, 500);
				}
				//console.log("boot jogou ",tipo_boot)
				
				} else {
					vez_do_boot=true
				}
			
			}
	}
	controle_botao=true
	}
}

//    Array.splice(inicio, removeCount, novoItem, novoItem, novoItem, ...)

function troca_imagem(){
	if (fim != true) {
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
}

function boot_facil(){
	// facil
	var parar=true;
	var tarncar=0
	if (true) {
		while(parar){
			var tentar=getRandomInt(8);
			//console.log("boot vai jogar = ",tentar)
			if (l[tentar] != "X" && l[tentar] != "O") {
				jogando("btn_"+tentar);
				parar=false
				//console.log("boot jogou")	
			}
			tarncar++;
			//console.log("trancar == ",tarncar)
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

	//console.log("-------------------------------------")
	while(c < 24){
		 //console.log("c == ",c)
		//console.log("bloc == ",l[bloc[c][0]],"|",l[bloc[c][1]])
		if(l[bloc[c][0]] == l[bloc[c][1]] && l[bloc[c][1]] !="" && l[bloc[c][2]] == ""){
			//console.log("ia foi = ",bloc[c][2])
			jogando("btn_"+bloc[c][2]);
			break

		}
		if(l[bloc[c][0]] == l[bloc[c][2]] && l[bloc[c][2]] !="" && l[bloc[c][1]] == ""){
			//console.log("ia foi = ",bloc[c][1])
			jogando("btn_"+bloc[c][1]);
			break
		}
		if(l[bloc[c][2]] == l[bloc[c][1]] && l[bloc[c][1]] !="" && l[bloc[c][0]] == ""){
			//console.log("ia foi = ",bloc[c][0])
			jogando("btn_"+bloc[c][0]);
			break
		}
		c++;
	}
	if(c == 24){
		boot_facil()
	}
}

function boot_dificil(){
	var tabuleiro=l;
	var icone="O"
	bloc=[[0,1,2],[0,2,1],[1,2,0] , [3,4,5],[3,5,4],[4,5,3]  ,[6,7,8],[6,8,7],[7,8,6] , [0,3,6],[0,6,3],[3,6,0]  ,  [1,4,7],[1,7,4],[4,7,1] ,[2,5,8],[2,8,5],[5,8,2],[0,4,8],[0,8,4],[4,8,0],[2,4,6],[2,6,4],[4,6,2]]
	var c=0;

	//console.log("-------------------------------------")
	var minh_pos = [0,2,6,8];
	var inim_pos = [8,6,2,0];
	var jog_1 = [2,0,0,2];
	var jog_2 = [6,8,8,6];

	var controle_seguraca=true;

	//jogada lateral
	

	if (controle_seguraca) {
		while(c < 24){

		if(l[bloc[c][0]] == l[bloc[c][4]] && l[bloc[c][4]] =="O" && l[bloc[c][2]] == ""){
			//console.log("ia foi = ",bloc[c][2])
			jogando("btn_"+bloc[c][2]);
			controle_seguraca=false;
			break
		}

		if(l[bloc[c][0]] == l[bloc[c][1]] && l[bloc[c][1]] =="O" && l[bloc[c][2]] == ""){
			//console.log("ia foi = ",bloc[c][2])
			jogando("btn_"+bloc[c][2]);
			controle_seguraca=false;
			break

		}
		if(l[bloc[c][0]] == l[bloc[c][2]] && l[bloc[c][2]] =="O" && l[bloc[c][1]] == ""){
			//console.log("ia foi = ",bloc[c][1])
			jogando("btn_"+bloc[c][1]);
			controle_seguraca=false;
			break
		}
		if(l[bloc[c][2]] == l[bloc[c][1]] && l[bloc[c][1]] =="O" && l[bloc[c][0]] == ""){
			//console.log("ia foi = ",bloc[c][0])
			jogando("btn_"+bloc[c][0]);
			controle_seguraca=false;
			break
		}
		c++;
		}
	}
	//console.log("ganhei")

	c=0;
	if (controle_seguraca) {
		while(c < 24){
		 //console.log("c == ",c)
		//console.log("bloc == ",l[bloc[c][0]],"|",l[bloc[c][1]])
		if(l[bloc[c][0]] == l[bloc[c][1]] && l[bloc[c][1]] !="" && l[bloc[c][2]] == ""){
			//console.log("ia foi = ",bloc[c][2])
			jogando("btn_"+bloc[c][2]);
			controle_seguraca=false;
			break

		}
		if(l[bloc[c][0]] == l[bloc[c][2]] && l[bloc[c][2]] !="" && l[bloc[c][1]] == ""){
			//console.log("ia foi = ",bloc[c][1])
			jogando("btn_"+bloc[c][1]);
			controle_seguraca=false;
			break
		}
		if(l[bloc[c][2]] == l[bloc[c][1]] && l[bloc[c][1]] !="" && l[bloc[c][0]] == ""){
			//console.log("ia foi = ",bloc[c][0])
			jogando("btn_"+bloc[c][0]);
			controle_seguraca=false;
			break
		}
		c++;
		}//console.log("bloquei")
	}

	if (controle_seguraca) {
		for (var i = 0; i < 5; i++) {
		if(l[minh_pos[i]] == l[4] && l[4] =="O" && l[inim_pos[i]] == ""){
			jogando("btn_"+inim_pos[i]);
			controle_seguraca=false;
			break
		}

		if(l[minh_pos[i]] == l[4] && l[4] =="O" && l[inim_pos[i]] == "X"){
			if (l[jog_1[i]] == "") {
				jogando("btn_"+jog_1[i]);
				controle_seguraca=false;
				break
			}

			if (l[jog_2[i]] == "") {
				jogando("btn_"+jog_2[i]);
				controle_seguraca=false;
				break
			}
		}
		}
	}

	if (controle_seguraca) {
		for (var i = 0; i < 5; i++) {

		if(l[minh_pos[i]] == l[4] && l[4] =="X" && l[inim_pos[i]] == "O"){
			if (l[jog_1[i]] == "") {
				jogando("btn_"+jog_1[i]);
				controle_seguraca=false;
				break
			}

			if (l[jog_2[i]] == "") {
				jogando("btn_"+jog_2[i]);
				controle_seguraca=false;
				break
			}
		}
		}
	}
 	
 	if (controle_seguraca) {
		if(c == 24){
		if (l[4] == "") {
			jogando("btn_4");
			//console.log("centro")
		}else{
			boot_facil()
		}
		}
	}
}

function colocar_nomes(){
	var nome_play1 = document.getElementById("name_1_combt");
	var n_p = String(sessionStorage.getItem("save_nome_play_1"))
	if(n_p != null && n_p != ''){
		nome_play1.innerHTML = "__"+n_p
		//console.log("np ",n_p)
	}
	
	var nome_play2 = document.getElementById("name_2_combt");
	var n_p = String(sessionStorage.getItem("save_nome_play_2"))
	if(n_p != null && n_p != ''){
		nome_play2.innerHTML = n_p
		//console.log("foi")
		//console.log(n_p," p1 ",sessionStorage.getItem("save_nome_play_2")," p2")
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
	var controle_final=true; //corrigi o bug da velha no final
	if (l[0] == l[1] && l[1] == l[2] && l[1] != ""){
		controle_final=false;
		enviar_resul(l[1])
		sessionStorage.setItem("linha_win",0);
		preencher_frame()
		//window.location.href="resultado.html";
	}
	if(l[3] == l[4] && l[4] == l[5] && l[4] != ""){
		controle_final=false;
		enviar_resul(l[4])
		sessionStorage.setItem("linha_win",1);
		preencher_frame()
	}
	if(l[6] == l[7] && l[7] == l[8] && l[7] != ""){
		controle_final=false;
		enviar_resul(l[7])
		sessionStorage.setItem("linha_win",2);
		preencher_frame()
	}
	// coluna
	if(l[0] == l[3] && l[3] == l[6] && l[3] != ""){
		controle_final=false;
		enviar_resul(l[3])
		sessionStorage.setItem("linha_win",3);
		preencher_frame()
	}
	if(l[1] == l[4] && l[4] == l[7] && l[4] != ""){
		controle_final=false;
		enviar_resul(l[4])
		sessionStorage.setItem("linha_win",4);
		preencher_frame()
	}
	if(l[2] == l[5] && l[5] == l[8] && l[5] != ""){
		controle_final=false;
		enviar_resul(l[5])
		sessionStorage.setItem("linha_win",5);
		preencher_frame()
	}
	// cruzado
	if(l[0] == l[4] && l[4] == l[8] && l[4] != ""){
		controle_final=false;
		enviar_resul(l[4])
		sessionStorage.setItem("linha_win",6);
		preencher_frame()
	}
	if(l[2] == l[4] && l[4] == l[6] && l[4] != ""){
		controle_final=false;
		enviar_resul(l[4])
		sessionStorage.setItem("linha_win",7);
		preencher_frame()
	}	
	if(controle_final){
		if( cont_botao == 9){
			if(l[0] == l[4] && l[4] == l[8] && l[4] != ""){
				enviar_resul(l[4])
				sessionStorage.setItem("linha_win",6);
				preencher_frame()
		}else{
			enviar_resul("v")
			sessionStorage.setItem("linha_win",8);
			preencher_frame()
			}
		}
	}
}

function troca_play(){
	if( play_da_vez == "X"){
		play_da_vez="O"
	}else{
		play_da_vez="X"
	}
}

function sair(){
	window.location.href="tipo-de-partida.html";
}
function an_sair(){
	reproduzir_audio(5)
	reproduzir_audio(10)
	com_som=false;
	setTimeout(sair, duracao_audio);

}


// REULTADO

var matriz=[];
var n_botao =0;

function preencher_frame(){
	fim = true
	preencher_play()
	sumir_dados()
	colorir()
}

function sumir_dados(){
	var z_n= document.getElementById("name_2_combt");
	z_n.innerHTML="";

	z_i = document.getElementById("troca_imagem_play_2");
	z_i.remove()

	document.querySelector(".btn-menu_2").style.display = "inline-block";
	document.querySelector(".config-play_1 .confete").style.display = "inline-block";

}

function descolorir(){
	for (var i = 0; i < 9; i++) {
		var bt =document.getElementById("btn_"+i);
		bt.style.background = null;
	}
}

function colorir(){
	descolorir()
	var tab = Number(sessionStorage.getItem("linha_win"));
	//console.log("linha ganhou ",tab)

	var linhas_win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
	if (tab != 8) {
		for (var i = 0; i < 3; i++) {
			//console.log("valor wini ",linhas_win[tab][i])
			//console.log("lista da linha ",linhas_win[tab])
				var bt =document.getElementById("btn_"+linhas_win[tab][i]);
				bt.style.background = "lightgreen";
				//console.log(" i == ",i)
			}
		}
}

function preencher_play(){
	var nome_play = document.getElementById("name_1_combt");
	var nm=String(sessionStorage.getItem("vencedor").trim());

	if(nm =="X"){

		document.getElementById('troca_imagem_play_1').src="src/imagens/imagem-1_80.png";
		//console.log("colocou imagem p1")
		var n_p = String(sessionStorage.getItem("save_nome_play_1"))
		if(n_p != null && n_p != ""){
			nome_play.innerHTML = n_p+" é o vencedor"
		}else{
			nome_play.innerHTML = "Player 1 é o vencedor"
		}
		reproduzir_audio(14)
	}if (nm == 'O') {
		// imagem

		var n_p = String(sessionStorage.getItem("save_nome_play_2"))
		//console.log("nome do play = ",n_p)
		
		var imagem_play_2="";
		var jkl = String(sessionStorage.getItem("tipo_p"))
		//console.log("jkl = ",jkl)

		if (jkl == "true") {
			//console.log("o vei fei")
			document.getElementById('troca_imagem_play_1').src="src/imagens/imagem-2_80.png";
			reproduzir_audio(14)
		}else{
			//console.log("biitu")
			document.getElementById('troca_imagem_play_1').src="src/imagens/robo-4_80.png";
			reproduzir_audio(11)
		}
		// nome 

		if(n_p != null && n_p != ""){
			nome_play.innerHTML = n_p+" é o vencedor"
		}else{
			nome_play.innerHTML = "Player 2 é o vencedor"
		}
	} if (nm == "v"){

		document.getElementById('troca_imagem_play_1').src="src/imagens/ts_100.png";
		nome_play.innerHTML = "Deu Velha"
		reproduzir_audio(13)
	}
	
}

function pla_again(){
	window.location.href="campo-de-batalha.html";
}

function jogar_novamente(){
	reproduzir_audio(5)
	reproduzir_audio(12)
	com_som=false;
	setTimeout(pla_again, duracao_audio);
	
}