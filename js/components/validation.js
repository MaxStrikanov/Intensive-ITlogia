const inputs = document.querySelectorAll('.order-form > input');
const btnOrderAction = document.getElementById('btn-order');

console.log(inputs);

const validation = () => {
	btnOrderAction.onclick = () => {
	let hasError = false;

	inputs.forEach((item) => {
		if (!item.value) {
			item.style.borderImageSource = 'linear-gradient(90deg, rgba(235,36,50,1) 0%, rgba(242,147,4,0.9724264705882353) 100%)';
			hasError = true
		} else {
			item.style.borderImageSource = '';
		}
	})
	if (!hasError) {
		inputs.forEach((item) => {
			item.value = '';
		})
		alert("Спасибо за заказ!")
		}
	}
}

export default validation;
