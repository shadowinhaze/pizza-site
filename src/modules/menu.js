if (window.location.pathname.includes('restaurant')) {
    const local = localStorage.getItem('restaurant');
    const selectedRest = JSON.parse(local);

    const changeTitle = () => {
        const restName = document.querySelector('.restaurant-title');
        const restRate = document.querySelector('.card-info .rating');
        const restStartPrice = document.querySelector('.card-info .price');
        const restCat = document.querySelector('.card-info .category');

        restName.innerText = `${selectedRest.name}`;
        restRate.innerText = `${selectedRest.stars}`;
        restStartPrice.innerText = `От ${selectedRest.price} ₽`;
        restCat.innerText = `${selectedRest.kitchen}`;
    };

    if (local) {
        changeTitle();
        processInfo();
    } else {
        window.location.href = '/';
    }

    async function processInfo() {
        const resp = await fetch(`https://pizza-site-720d3-default-rtdb.europe-west1.firebasedatabase.app/db/${selectedRest.products}`);
        const data = await resp.json();
        renderMenu(data)
    }
    
    const renderMenu = (data) => {
        const restMenuCardsContainer = document.querySelector('.cards-menu');
        data.forEach(({description, id, image, name, price}) => {
            const menuCard = document.createElement('div');
            menuCard.classList.add('card');
            menuCard.innerHTML = `
                <img src="./assets/${image}" alt="${name}" class="card-image" />
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title card-title-reg">${name}</h3>
                    </div>
                    <div class="card-info">
                        <div class="ingredients">${description}</div>
                    </div>
                    <div class="card-buttons">
                        <button class="button button-primary button-add-cart">
                            <span class="button-card-text">В корзину</span>
                            <span class="button-cart-svg"></span>
                        </button>
                        <strong class="card-price-bold">${price} ₽</strong>
                    </div>
                </div>
            `;
            restMenuCardsContainer.appendChild(menuCard);
        })
    }
}
