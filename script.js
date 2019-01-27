var navigateOverlay = document.querySelector('.navigate-overlay');
var navigateMenu = document.querySelector('.navigate-menu');
var navClassList = navigateMenu.classList;
function activateMenu()
{
	if(navClassList.contains('navigate-active') != true){
	 	navClassList.add('navigate-active');
	 	navigateOverlay.style.display = 'block';
	 	
	}else{
	 	navClassList.remove('navigate-active');
	 	navigateOverlay.style.display = 'none';
	}	 
}
window.addEventListener('click', function (event){
	if(event.target == navigateOverlay){
	navClassList.remove('navigate-active');
	navigateOverlay.style.display = 'none';
	}

})	