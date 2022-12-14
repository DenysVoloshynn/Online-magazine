const productsList = document.querySelector("#products-list");

async function getProducts() {
  const response = await fetch('/js/data.json');
  const productsArray = await response.json();

  renderProducts(productsArray)
}
getProducts()



function renderProducts(array) {
	array.forEach(product => {
		const productHTML = `<li class="product-card" id=${product.id}>
    <img src="${product.imgSrc}" alt="Dish photo" />
    <div class="product-info">
      <p class="name">${product.dishname}</p>
      <div class="options">
          <span>${product.options}</span>,
      </div>
      <p class="desc">
			${product.desc}
      </p>

      <div class="row__bottom">
      <p class="price"><span class="price-num">${product.price}</span> грн</p>
      <div class="counter">
        <button class="minus" data-action="minus">-</button>
        <p class="count">
					<span id="count">1</span>
				</p>
        <button class="plus" data-action="plus">+</button>
      </div>
      <button class="add-in-cart btn" id="add-in-basket">+  добавить в корзину</button>
      <button class="remove-from-cart none">
        <span class="cross"></span>
      </button>
      </div>
    </div>
  </li>`;


		
		if(product.class == "pizza" && window.location.pathname.includes("/pizza-page")) {
      productsList.insertAdjacentHTML("beforeend", productHTML)
    }

    if(product.class == "sushi" && window.location.pathname.includes("/sushi-page")) {
      productsList.insertAdjacentHTML("beforeend", productHTML)
    }

    if(product.class == "drinks" && window.location.pathname.includes("/drinks-page")) {
      productsList.insertAdjacentHTML("beforeend", productHTML)
    }

    if(product.class == "desserts" && window.location.pathname.includes("/desserts-page")) {
      productsList.insertAdjacentHTML("beforeend", productHTML)
    }

    if(product.class == "sauces" && window.location.pathname.includes("/sauces-page")) {
      productsList.insertAdjacentHTML("beforeend", productHTML)
    }



    

	});
}