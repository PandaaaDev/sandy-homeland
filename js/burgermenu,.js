const burgermenu = document.querySelector('.nav-burgermenu__button')
const nav = document.querySelector('.nav-menu')

const toggleMenu = () => {
	nav.classList.toggle('show')
}
burgermenu.addEventListener('click', toggleMenu)
