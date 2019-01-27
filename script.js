let navigateOverlay = document.querySelector('.navigate-overlay');
let navigateMenu = document.querySelector('.navigate-menu');
let navClassList = navigateMenu.classList;
let buttonIcon = document.querySelector('nav .fa');
function activateMenu()
{
	if(navClassList.contains('navigate-active') != true){
	 	navClassList.add('navigate-active');
		navigateOverlay.style.display = 'block';
		buttonIcon.classList.remove('fa-bars');
		buttonIcon.classList.add('fa-times');
	}else{
	 	navClassList.remove('navigate-active');
		navigateOverlay.style.display = 'none';
		buttonIcon.classList.remove('fa-times');
		buttonIcon.classList.add('fa-bars');
	}	 
}
window.addEventListener('click', function (event){
	if(event.target == navigateOverlay){
		navClassList.remove('navigate-active');
		navigateOverlay.style.display = 'none';
		buttonIcon.classList.remove('fa-times');
		buttonIcon.classList.add('fa-bars');
	}
});	
