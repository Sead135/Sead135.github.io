window.addEventListener('scroll', function () {
	const header = document.querySelector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu()
{
	const menuTuggle = document.querySelector('.menuToggle');
	const navigation = document.querySelector('.navigation');
	menuTuggle.classList.toggle('active');
	navigation.classList.toggle('active');
}