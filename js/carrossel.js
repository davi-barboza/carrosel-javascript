/*@author: Hildeir Daniel*/
///////////////////* CONFIGURAÇÃO */
//////////////////
var intervalTempo = 4000;
var tempoTransicao = 1;
//////////////////* FIM CONFIGURAÇÃO */
////////////////
var intervalPrimeiroSlide = 1;
var intervalSecondSlide = 2;
/* voltar slide */
var intervalTerceiroBack = 3;
var intervalQuartoBack = 4;
/* fim */				
						
window.onload = tempo;
var tempo = setInterval(inicio,intervalTempo); 
/* declarando as posicao LEFT dos slides */
var slideFirst = -100;
var slideSecond = -200;
var slideAtual = 0;
/* fim posição left*/
var hover = "i-legenda-hover";
var naoHover = "i-legenda-nao-hover";
var y;

	
							/* ANIMAÇÃO AUTOMÁTICA */
					/* ANIMAÇÃO CARROSEL E ANIMAÇÃO DA LEGENDA*/
function inicio(){
	var contCarrossel = document.getElementById("carrossel");
	var mt = sessionStorage.getItem(y);
	
	if(mt == intervalPrimeiroSlide)
	{
		sessionStorage.setItem(y,"2");
		contCarrossel.style.left = slideFirst+"%";
		contCarrossel.style.transition = "left "+tempoTransicao+"s";
		document.getElementById("i-legenda-2").setAttribute("class",hover);
		document.getElementById("i-legenda-1").setAttribute("class",naoHover);
		document.getElementById("i-legenda-3").setAttribute("class",naoHover);
	}
	if(mt == intervalSecondSlide)
	{
		sessionStorage.setItem(y,"3");
		contCarrossel.style.left = slideSecond+"%";
		contCarrossel.style.transition = "left "+tempoTransicao+"s";
		document.getElementById("i-legenda-3").setAttribute("class",hover);
		document.getElementById("i-legenda-2").setAttribute("class",naoHover);
		document.getElementById("i-legenda-1").setAttribute("class",naoHover);
		
	}
	
	if(mt == intervalQuartoBack)
	{
		sessionStorage.setItem(y,"1");
		contCarrossel.style.left = slideAtual+"%";
		contCarrossel.style.transition = "left "+tempoTransicao+"s";
		document.getElementById("i-legenda-1").setAttribute("class",hover);
		document.getElementById("i-legenda-2").setAttribute("class",naoHover);
		document.getElementById("i-legenda-3").setAttribute("class",naoHover);
		
	}
	if(mt >= intervalQuartoBack){
		mt = intervalPrimeiroSlide;
	}else{
		var novo_valor = parseInt(mt);
		novo_valor += 1;
		sessionStorage.setItem(y,novo_valor);	
	}
}
/////////////////////////* FIM DA ANIMAÇÃO AUTOMATICA*///////////////////////////////
////////////////////////////
////////////////////////////
//para animação e exibe os botoes
function para_e_aparece_bt(){
	clearInterval(tempo);
	document.getElementById("right_bt").style.visibility = "visible";
	document.getElementById("left_bt").style.visibility = "visible";
}
//continua animação e oculta os botoes
function continua_e_some_bt(){
	tempo = setInterval(inicio,intervalTempo);
	document.getElementById("left_bt").style.visibility = "hidden";
	document.getElementById("right_bt").style.visibility = "hidden";
}

							/*ANIMAÇÃO MANUAL*/
					/* CONTROLE DA ANIMAÇÃO PELA LEGENDA */
					/* E CONTROLE PELO OS BOTOES DIREITA E ESQUERDA */
function clique(valor){
	var contCarrossel = document.getElementById("carrossel");
	var item_1 = document.getElementById("i-legenda-1");
	var item_2 = document.getElementById("i-legenda-2");
	var item_3 = document.getElementById("i-legenda-3"); 
	var xy = sessionStorage.getItem(y);

	/* inicia botao esquerdo */
	/* e = esquerda, quando o botao esquerdo for clicado executa */
	if(valor == "e")
	{
		if(xy == 1){
			contCarrossel.style.left = slideSecond+"%";
			contCarrossel.style.transition = "left "+tempoTransicao+"s";
			item_3.setAttribute("class",hover);
			item_1.setAttribute("class",naoHover);
			item_2.setAttribute("class",naoHover);
			sessionStorage.setItem(y,"3");
		}
		if(xy == 3){
			contCarrossel.style.left = slideFirst+"%";
			contCarrossel.style.transition = "left "+tempoTransicao+"s";
			item_2.setAttribute("class",hover);
			item_1.setAttribute("class",naoHover);
			item_3.setAttribute("class",naoHover);
			sessionStorage.setItem(y,"2");
		}
		if(xy == 2){
			contCarrossel.style.left = slideAtual+"%";
			contCarrossel.style.transition = "left "+tempoTransicao+"s";
			item_1.setAttribute("class",hover);
			item_2.setAttribute("class",naoHover);
			item_3.setAttribute("class",naoHover);
			sessionStorage.setItem(y,"1");
		}
	}
	/* FIM do clique do botao esquerdo */

	/* inicia botao direito d = direito*/
	if(valor == "d")
	{
		if(xy == 1){
			contCarrossel.style.left = slideFirst+"%";
			contCarrossel.style.transition = "left "+tempoTransicao+"s";
			item_2.setAttribute("class",hover);
			item_1.setAttribute("class",naoHover);
			item_3.setAttribute("class",naoHover);
			sessionStorage.setItem(y,"2");
		}
		if(xy == 2){
			contCarrossel.style.left = slideSecond+"%";
			contCarrossel.style.transition = "left "+tempoTransicao+"s";
			item_3.setAttribute("class",hover);
			item_1.setAttribute("class",naoHover);
			item_2.setAttribute("class",naoHover);
			sessionStorage.setItem(y,"3");
		}
		if(xy == 3){
			contCarrossel.style.left = slideAtual+"%";
			contCarrossel.style.transition = "left "+tempoTransicao+"s";
			item_1.setAttribute("class",hover);
			item_2.setAttribute("class",naoHover);
			item_3.setAttribute("class",naoHover);
			sessionStorage.setItem(y,"1");
		}
	}
	/* FIMM do clique do botao direito */
	////////////////////////////////////
	///////////////////////////////////

	/* OS CLIQUE DOS ITENS DA LEGENDA */
	if(valor == 1){
		contCarrossel.style.left = slideAtual+"%";
		contCarrossel.style.transition = "left "+tempoTransicao+"s";
		sessionStorage.setItem(y,"1");  // 2 = armazena item para retorna o hover referente ao slide
	}
	if(valor == 2 ){
		contCarrossel.style.left = slideFirst+"%";
		contCarrossel.style.transition = "left "+tempoTransicao+"s";
		sessionStorage.setItem(y,"2");  //2
	}
	if(valor == 3 ){
		contCarrossel.style.left = slideSecond+"%";
		contCarrossel.style.transition = "left "+tempoTransicao+"s";
		sessionStorage.setItem(y,"3"); //2
	}
}					
					/* FIM DOS CLIQUE DOS ITENS DA LEGENDA*/
///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
			/* FUNCAO HOVER: TROCA AS IMAGENS DOS ITENS DA LEGENDA */
			/* QUANDO O MOUSE ESTA SOBRE E QUANDO ESTÁ FORA DO ELEMENTO */
function _hover_(recebe){
	var item_1 = document.getElementById("i-legenda-1");
	var item_2 = document.getElementById("i-legenda-2");
	var item_3 = document.getElementById("i-legenda-3");
	
	if(recebe == 1){
		item_1.setAttribute("class",hover);
		item_2.setAttribute("class",naoHover);
		item_3.setAttribute("class",naoHover);
		
	}
	if(recebe == 2 ){
		item_2.setAttribute("class",hover);
		item_1.setAttribute("class",naoHover);
		item_3.setAttribute("class",naoHover);
		
	}
	if(recebe == 3 ){
		item_3.setAttribute("class",hover);
		item_1.setAttribute("class",naoHover);
		item_2.setAttribute("class",naoHover);
		
	}
}			
function fora_leave(recebeLeave){
	document.getElementById("i-legenda-"+recebeLeave).setAttribute("class",naoHover);
	 /* QUANDO O MOUSE SAIR DO ITEM, O ÚLTIMO SLIDE QUE FOI PARADO SERA RETORNADO O HOVER
	REFERENTE AO SLIDE */
	var x = sessionStorage.getItem(y);
	document.getElementById("i-legenda-"+x).setAttribute("class",hover);
}
						/* FIM */