const currencyBtn = document.querySelector('.currency');
let burgerPrice = document.querySelectorAll('.burger-price');

const  currency = () => {
	currencyBtn.onclick = (e) => {
		let currentCurrency = e.target.innerText;

		let newCurrency = '$';
		let coeficient = 1

		if (currentCurrency === '$') {
			newCurrency = "₽"
			coeficient = 80;
		} else if (currentCurrency === '₽') {
			newCurrency = "BYN"
			coeficient = 3;
		} else if (currentCurrency === 'BYN') {
			newCurrency = '€';
			coefficient = 0.9;
		} else if (currentCurrency === '€') {
			newCurrency = '¥';
			coefficient = 6.9;
		}

		e.target.innerText = newCurrency;

		for( let i = 0; i < burgerPrice.length; i++) {
			burgerPrice[i].innerText = `${+(burgerPrice[i].getAttribute('data-base-price') * coeficient).toFixed(1) +  newCurrency}`;
		}
	}
}

export default currency;