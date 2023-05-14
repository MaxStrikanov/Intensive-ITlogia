const getData = async (url) =>  {
    const response = await fetch(url);
    if(!response.ok) {

        throw new Error(`Ошибка по адресу ${url}, 
        статус ошибки ${response.status}!`);

    }
    return await response.json();
    
};

const card = document.querySelector('.burger-cards');

const createCard =  ({ burgerName: name, description, image, price, weight  }) => {
card.insertAdjacentHTML('beforeend', `
    <div class="burger-card">
        <img src="${image}" alt="">
        <div class="burger-card-name">${name}</div>
        <div class="burger-card-description">${description}</div>
        <div class="burger-card-extra">
            <div class="burger-other">
                <div class="burger-price">${price} $</div>
                <div class="burger-weight">${weight} гр</div>
            </div>
            <button class="btn-primary order-btn">
                <span>Заказать</span>
                <img src="/img/basket.svg" alt="">
            </button>
        </div>
    </div>    
`
);

}
const init = () => {
    getData('/bd/burgers.json').then( data => data.forEach(createCard) );
    

}

export default init;