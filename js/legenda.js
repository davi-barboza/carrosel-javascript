/*@author: Hildeir Daniel*/
// exibe as legendas depois que a pagina estiver carregada
// e atribui valor 1 no localstorage hover para que sempre quando carregar
// a pagina o valor hover no localstorage possa sempre ser 1
window.onload = init;
function init()
{	
	y = Math.floor(Math.random()*100);
	sessionStorage.setItem(y,1);

	var hover = "i-legenda-hover";
	var naoHover = "i-legenda-nao-hover";
	document.getElementById("i-legenda-1").setAttribute("class",hover);
	document.getElementById("i-legenda-2").setAttribute("class",naoHover);
	document.getElementById("i-legenda-3").setAttribute("class",naoHover);
}