// проверка ввода только цифр в инпуты
const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);// получение элементов
// перебор инпутов
    numInputs.forEach(item => {
			//обработчик событий
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default checkNumInputs;
