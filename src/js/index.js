/*
pegar os nomes
setar partida
mostrar os resultados 
audio
*/

//garantir que o audiu nao repita.
function save_nome_play1(){
	sessionStorage.setItem("save_nome_play_1",document.getElementById("name_1").value);
	sessionStorage.setItem("save_nome_play_2",document.getElementById("name_2").value);
	window.location.href="campo-de-batalha.html";
}

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
