/*
pegar os nomes
setar partida
mostrar os resultados 
audio
*/
var numb = 0;
console.log("valor ",numb)
numb+=1;

//garantir que o audiu nao repita.
console.log("inicial");
 var lista_audio_sair=["achoqueeutavabrincando.mp3","arregou.mp3","javaiboltz.mp3","masnaovemporqueehcagao.mp3","morri.mp3"]
 var lista_audio_perdeu=["caixaocurto.mp3","choqueuva.mp3","erroufeioerrourude.mp3","eunaoassumoessebo.mp3","evilmortytema.mp3","faleceu.mp3","flautabugadatitanic.mp3","hellodarknessmyownfriend.mp3","hellodarknessmyownfriendfunk.mp3","impressionantecomovocestentammederrubar.mp3","isolados.mp3","jaacaboujessica.mp3","jubileuestaesquisitohoje.mp3","musicatristechaves1.mp3","musicatristenaruto.mp3","musicatristenarutofunk.mp3","musicatristexxxtentacion.mp3","naoconseguene.mp3","queotaeuvoudaota.mp3","sefodeugta.mp3","sefudeu.mp3","somfatality.mp3","souummerdamerdao.mp3","surprisemotherfucker.mp3","vemtranquilo.mp3","voceehretardadoporacaso.mp3","vocenaoehtaobomassimehumfracassado.mp3"]
 var lista_audio_denovo=["cevaimorrer.mp3","horadoshow.mp3","mandarmatar.mp3","tasaindodajaulaomonstro.mp3","vemafobadoassimnao.mp3","voupegarminhamarreta.mp3"]

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(getRandomInt(3));
// Expected output: 0, 1 or 2

console.log(getRandomInt(1));
// Expected output: 0


function audio_sair(){
	//alert("foi");
	var audio = new Audio('src/sons/audio interativo/sair/morri.mp3');
	audio.play();	
}

audio_sair()


function nome_dos_playes(){
	var nome_play1 = document.getElementById('input_play1').value;	
	var nome_play2 = document.getElementById('input_play2').value;
	
	if (nome_play1==""){
		nome_play1="Player 1"
	}if (nome_play2==""){
		nome_play1="Player 2"
	}
	alert(nome_play1);
}

/*
   <script type="text/javascript">
    window.onload = audio_sair();
    */
