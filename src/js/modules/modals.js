// Модальные окна
const modals = () => {
	// Привязка модального окна к триггеру
	function bindModal(triggerSelector, modalSelector, closeSelector) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]');
		scroll = calcScroll();
		// Открытие модального окна
		trigger.forEach(item => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				//закрытие всех модальных окон
				windows.forEach(item => {
					item.style.display = 'none';
				});

				modal.style.display = "block";
				// Отмена скролла экрана под модальным окном
				document.body.style.overflow = "hidden";
				// Вариант с использованием Bootstrap
				// document.body.classList.add('modal-open');
				//присаивание правого отступа равного ширине полосы прокрутки
				// (чтобы окно не дергалось при открытии)
				document.body.style.marginRight = `${scroll}px`;
			});
		});
		//Закрытие модального окна крестиком
		close.addEventListener('click', () => {
			windows.forEach(item => {
				item.style.display = 'none';
			});

			modal.style.display = "none";
			document.body.style.overflow = "";

			// убираем правый отступ при закрытии окна
			// для полосы прокрутки
			document.body.style.marginRight = `0px`;
		});

	}

	// подсчет ширины линейки скролла
	function calcScroll() {
		//создаем блок
		let div = document.createElement('div');
		//устанавливаем ему ширину и высоту
		div.style.width = '50px';
		div.style.height = '50px';
		//устанавливаем стиль отображения элемента (всегда есть полоса прокрутки)
		div.style.overflowY = 'scroll';
		//скрываем элемент (делаем прозрачным)
		div.style.visibility = 'hidden';
		//помещаем на страницу (не важно куда)
		document.body.appendChild(div);
		//разница между полной шириной блока и шириной с контентом и границей
		// (без полосы прокрутки)
		//т.е. это ширина полосы прокрутки
		let scrollWidth = div.offsetWidth - div.clientWidth;
		//удаление теперь не нужного элемента
		div.remove();

		return scrollWidth;
	}

	bindModal('.header__button', '.popup', '.popup__close');
	bindModal('.main__button', '.popup', '.popup .popup__close');
	bindModal('.button__form', '.popup__thank', '.popup__close-thank');
};

export default modals;
