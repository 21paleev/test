// Подсказки
const hints = () => {
	// Привязка подсказки к триггеру
	function bindHint(triggerSelector, hintSelector) {
		const triggerHint = document.querySelector(triggerSelector),
			hint = document.querySelector(hintSelector),
			frame = document.querySelector("frame");

		// Открытие подсказки
		triggerHint.addEventListener('click', (e) => {
			if (e.target === triggerHint) {
				e.preventDefault();
			}
			hint.style.display = "block";
		});

		// Закрытие подсказки
		hint.addEventListener('click', (e) => {
			if (!e.target !== hint || frame) {
				hint.style.display = "none";
			}
		});
	}

	bindHint('.header__map-link', '.hint-map');
	bindHint('.round__button', '.hint');

};

export default hints;
