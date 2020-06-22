import checkNumInputs from './checkNumInputs'; // проверка ввода цифр
// Формы
const forms = () => {
	const form = document.querySelector('.popup'), // Все формы
		inputs = document.querySelectorAll('input'); // Все инпуты

	// проверка на ввод только цифр
	checkNumInputs('input[name="user_phone"]');

	const clearInputs = () => {
		inputs.forEach(item => {
			item.value = '';
		});
	};
	// Обработчик события submit на каждую форму
	form.addEventListener('submit', (e) => {
		e.preventDefault(); // без перезагрузки страницы
		form.style.display = "none";
		clearInputs();

	});

};

export default forms;
