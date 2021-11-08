if (!window.location.pathname.includes('restaurant')) {
    
    (async () => {
        const resp = await fetch(`https://pizza-site-720d3-default-rtdb.europe-west1.firebasedatabase.app/db/partners.json`);
        const data = await resp.json();
        renderCards(data)
    })();
    
    const renderCards = (data) => {
        const restCardsContainer = document.querySelector('.cards-restaurants');
        data.forEach(item => {
            const { image, kitchen, name, price, products, stars, time_of_delivery } = item;
            const itemCard = document.createElement('a');
            itemCard.setAttribute('href', 'restaurant.html');
            itemCard.classList.add('card', 'card-restaurant');
            itemCard.innerHTML = `
            <img src="./assets/${image}" alt="Доставка - ${name}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-tag tag">${time_of_delivery} мин</span>
                </div>
                <div class="card-info">
                    <div class="rating">${stars}</div>
                    <div class="price">От ${price} ₽</div>
                    <div class="category">${kitchen}</div>
                </div>
            </div>
            `;
            restCardsContainer.appendChild(itemCard);
            itemCard.addEventListener('click', (e) => {
                e.preventDefault();
                localStorage.setItem('restaurant', JSON.stringify(item));
                window.location.href = '/restaurant.html';
            })
            
        })
    }
}








