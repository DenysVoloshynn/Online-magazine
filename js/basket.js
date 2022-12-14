

const basketList = document.querySelector(".basket-menu__cards-list")
const itemsInBasket = document.querySelector("#items-in-basket")
const totalPrice = document.querySelector("#total-price")


if (localStorage.getItem("firstVisit") == null) {
  localStorage.setItem("productsArray", "[]")
}

localStorage.setItem("firstVisit", "")


function showEmptyBlock(event) {
  const emptyBlock = document.querySelector(".basket-menu__empty-block")
  if (basketList.children.length == 0) {
    emptyBlock.classList.remove("disappear")
  }
  if (basketList.children.length > 0) {
    emptyBlock.classList.add("disappear")
  }
}


function countDelivery() {
  const delivery = document.querySelector(".delivery-wrapper")
  const bottomRowInBasketMenu = document.querySelector(".basket-menu__bottom-row")

  if (totalPrice.innerText > 400) {
    delivery.classList.add("free")
    bottomRowInBasketMenu.classList.remove("none")
  }
  else if (totalPrice.innerText == 0) {
    bottomRowInBasketMenu.classList.add("none")
  }
  else {
    delivery.classList.remove("free")
    bottomRowInBasketMenu.classList.remove("none")
  }

}







window.addEventListener("load", function renderLS (event) {
  const productsArray = JSON.parse(localStorage.getItem("productsArray"));
  
  productsArray.forEach(card => {

    const cardHTML = `
    <div class="basket-menu__card product-card" id="${card.id}">
    <div class="col">
      <img class="card__img" src="${card.imgSrc}" alt="Food">
      <div class="card__desc">
        <p class="card__dish-name">
          ${card.dishname}
        </p>
        <p class="card__options">
          ${card.options}
        </p>
        <p class="card__price">
          <span class="card__price-number" id="price">${card.price}</span>грн
        </p>
      </div>
    </div>
    <div class="col col-btns">
      <div class="counter">
        <button data-action="basket-minus" class="counter-minus">-</button>
        <p class="number"><span id="basket-count">${card.counter}</span></p>
        <button data-action="basket-plus" class="counter-plus">+</button>
      </div>
      <button class="btn-delete-card" id="delete-from-basket">
        удалить из корзины
      </button>
    </div>
  </div>`

  basketList.insertAdjacentHTML("beforeend", cardHTML)
  totalPrice.innerText = +totalPrice.innerText + +card.price * +card.counter
  itemsInBasket.innerText = +itemsInBasket.innerText + +card.counter
  });
  showEmptyBlock(event)
  countDelivery()
})







document.addEventListener("click", function countProductsAndAddInBasket(event) {

  const btnPlus = event.target.closest("[data-action='plus']")
  const btnMinus = event.target.closest("[data-action='minus']")

  let card = event.target.closest(".product-card")
  let count
  let btnAddInBasket
  if (card) {
    count = card.querySelector("#count")
    btnAddInBasket = card.querySelector("#add-in-basket")
  }


  if (event.target == btnPlus) {
    count.innerText = ++count.innerText
    countDelivery()
  }
  if (event.target == btnMinus && count.innerText > 1) {
    count.innerText = --count.innerText
    countDelivery()
  }

  if (event.target == btnAddInBasket) {

    const dishname = card.querySelector(".name").innerText
    const price = card.querySelector(".price-num").innerText
    const options = card.querySelector(".options span").innerText
    const imgSrc = card.querySelector("img").getAttribute("src")
    const id = card.getAttribute("id")
    let counter = card.querySelector("#count")

    const cardObject = {
      dishname: dishname,
      price: price,
      options: options,
      imgSrc: imgSrc,
      counter: counter.innerText,
      id: id
    }

    const cardHTML = `
    <div class="basket-menu__card product-card" id="${cardObject.id}">
    <div class="col">
      <img class="card__img" src="${cardObject.imgSrc}" alt="Food">
      <div class="card__desc">
        <p class="card__dish-name">
          ${cardObject.dishname}
        </p>
        <p class="card__options">
          ${cardObject.options}
        </p>
        <p class="card__price">
          <span class="card__price-number" id="price">${cardObject.price}</span>грн
        </p>
      </div>
    </div>
    <div class="col col-btns">
      <div class="counter">
        <button data-action="basket-minus" class="counter-minus">-</button>
        <p class="number"><span id="basket-count">${cardObject.counter}</span></p>
        <button data-action="basket-plus" class="counter-plus">+</button>
      </div>
      <button class="btn-delete-card" id="delete-from-basket">
        удалить из корзины
      </button>
    </div>
  </div>`


    const itemInBasket = basketList.querySelector(`[id="${cardObject.id}"]`)


    if (itemInBasket) {
      const countItemInBasket = itemInBasket.querySelector("#basket-count")
      countItemInBasket.innerText = +countItemInBasket.innerText + +cardObject.counter
      itemsInBasket.innerText = +itemsInBasket.innerText + +counter.innerText
      totalPrice.innerText = +totalPrice.innerText + +counter.innerText * +price
      addObjectDataInLS(event)
      counter.innerText = 1
      countDelivery()
    } else {
      basketList.insertAdjacentHTML("beforeend", cardHTML)
      itemsInBasket.innerText = +itemsInBasket.innerText + +counter.innerText
      totalPrice.innerText = +totalPrice.innerText + +counter.innerText * +price
      addObjectDataInLS(event)
      counter.innerText = 1
      countDelivery()
    }
  }

  countDelivery()
  showEmptyBlock(event)
})




function addObjectDataInLS(event) {
  const card = event.target.closest(".product-card")
  const productsArray = JSON.parse(localStorage.getItem("productsArray"));
  const cardInArray = productsArray.find(object => object.id === card.id)

  if (event.target.closest("#delete-from-basket")) {
    const index = productsArray.indexOf(cardInArray)
    productsArray.splice(index, 1)
  }

  if (event.target.closest("#add-in-basket")) {
    const cardData = {
      dishname: card.querySelector(".name").innerText,
      id: card.getAttribute("id"),
      options: card.querySelector(".options span").innerText,
      desc: card.querySelector(".desc").innerText,
      price: card.querySelector(".price-num").innerText,
      counter: card.querySelector("#count").innerText,
      imgSrc: card.querySelector("img").getAttribute("src"),
    }



    if (cardInArray) {
      cardInArray.counter = +cardData.counter + +cardInArray.counter
    } else {
      productsArray.push(cardData)
    }
  }

  localStorage.setItem("productsArray", JSON.stringify(productsArray))
}






function countInLS(event) {
  const cardInBasket = event.target.closest(".basket-menu__card")
  const count = cardInBasket.querySelector("#basket-count")
  const productsArray = JSON.parse(localStorage.getItem("productsArray"));

  const cardObject = productsArray.find(card => cardInBasket.getAttribute("id") == card.id)

  if (event.target.closest('[data-action="basket-plus"]')) {
    cardObject.counter = +cardObject.counter + 1
  }
  if (event.target.closest('[data-action="basket-minus"]')) {
    if(count.innerText == 0) {
      const index = productsArray.indexOf(cardObject)
      productsArray.splice(index, 1)
    } else {
      cardObject.counter = +cardObject.counter - 1
    }
    
  }


  localStorage.setItem("productsArray", JSON.stringify(productsArray))
}












basketList.addEventListener("click", function deleteAndCountProductsnBasket(event) {
  if (event.target.closest("#delete-from-basket")) {
    const card = event.target.closest(".basket-menu__card")
    card.remove()
    const basketMenu = document.querySelector(".basket-menu")
    basketMenu.classList.add("basket-menu-showed")

    const counter = card.querySelector("#basket-count")
    itemsInBasket.innerText = +itemsInBasket.innerText - counter.innerText

    const price = card.querySelector("#price")
    totalPrice.innerText = +totalPrice.innerText - (+counter.innerText * +price.innerText)

    addObjectDataInLS(event)
    showEmptyBlock(event)
  }


  if (event.target.closest('[data-action="basket-plus"]')) {
    const card = event.target.closest(".basket-menu__card")
    const count = card.querySelector("#basket-count")
    count.innerText = ++count.innerText
    itemsInBasket.innerText = ++itemsInBasket.innerText
    const price = card.querySelector("#price")
    totalPrice.innerText = +totalPrice.innerText + +price.innerText
    countInLS(event)
  }
  if (event.target.closest('[data-action="basket-minus"]')) {
    const card = event.target.closest(".basket-menu__card")
    const count = card.querySelector("#basket-count")
    const price = card.querySelector("#price")
    if (count.innerText > 1) {
      count.innerText = --count.innerText
      itemsInBasket.innerText = --itemsInBasket.innerText
      totalPrice.innerText = +totalPrice.innerText - +price.innerText
      countInLS(event)
    } else {
      count.innerText = --count.innerText
      card.remove()
      const basketMenu = document.querySelector(".basket-menu")
      basketMenu.classList.add("basket-menu-showed")
      itemsInBasket.innerText = --itemsInBasket.innerText
      totalPrice.innerText = +totalPrice.innerText - +price.innerText
      countInLS(event)
    }
  }
})