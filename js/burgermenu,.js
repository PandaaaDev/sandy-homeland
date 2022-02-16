const burgermenu = document.querySelector('.nav-burgermenu__button')
const nav = document.querySelector('.nav-menu')
const main = document.querySelector('.main')
const toggleMenu = () => {
	nav.classList.toggle('show')
	if (nav.classList[1] === 'show') {
		burgermenu.innerHTML = '<i class="fa-solid fa-xmark"></i>'
	} else {
		burgermenu.innerHTML = '<i class="fa-solid fa-bars-staggered"></i>'
	}
}
const removeMenu = () => {
	nav.classList.remove('show')
}
burgermenu.addEventListener('click', toggleMenu)
main.addEventListener('click', removeMenu)
