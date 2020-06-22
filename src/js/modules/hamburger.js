//Боковое меню и гамбургер
const hamburger = () => {

	const menu = document.querySelector('.nav__menu'),
		menuItem = document.querySelectorAll('.nav__item'),
		hamburger = document.querySelector('.hamburger');

	hamburger.addEventListener('click', () => {
		console.log('hamburger');
		hamburger.classList.toggle('hamburger_active');
		menu.classList.toggle('nav__menu_active');
	});

	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.toggle('hamburger_active');
			menu.classList.toggle('nav__menu_active');
		});
	});

};

export default hamburger;
