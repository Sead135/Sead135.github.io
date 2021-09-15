/*const showMenu = (toggleId, navId) =>
{
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)

		if (toggle && nav) 
		{
			toggle.addEventListener('click', ()=>{
				nav.classList.toggle('show')
			})
		}
}

showMenu('nav-toggle','nav-menu')

/* Переключение вкладок на телефоне */
const navLinks = document.querySelectorAll('.nav__links')

function linkAction() 
{
	/* Активная вкладка */
	navLinks.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

	/* Переключение вкладок */
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show')
}

navLinks.forEach(n => n.addEventListener('click', linkAction))*/