import forms from './modules/forms';
import modals from './modules/modals';
import parallax from './modules/parallax';
import hints from './modules/hint';
import hamburger from './modules/hamburger';

window.addEventListener('DOMContentLoaded', () => {
	"use strict";

	parallax();
	hints();
	modals();
	forms();
	hamburger();


});
