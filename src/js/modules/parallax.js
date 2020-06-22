import simpleParallax from 'simple-parallax-js';

const parallax = () => {


	let imageLeft = document.querySelector('.par__left-img'),
		imageRight = document.querySelector('.par__right-img');

	new simpleParallax(imageLeft, {
		orientation: 'right',
		delay: 1.5,
		scale: 1.8,
		overflow: true
	});
	new simpleParallax(imageRight, {
		orientation: 'left',
		delay: 1.5,
		scale: 1.8,
		overflow: true
	});



};



export default parallax;
