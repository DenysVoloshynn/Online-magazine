const HTMLpage = `



<header>
<div class="row">
	<div class="row__inner">

		<div class="col-left">
			<a href="/index.html" class="logo">smile <br> <span>food</span></a>
			<div class="num-phone">
				<p class="desc">
					Заказывайте по номеру:
				</p>
				<br>
				<span class="num">333-666-999</span>
			</div>
		</div>
		<div class="col-right">
			<ul class="list-socials">
				<li class="list-socials__item instagram-link">
					<i class="icon-instagram"></i>
				</li>
				<li class="list-socials__item facebook-link">
					<i class="icon-facebook-1"></i>
				</li>
				<li class="list-socials__item twitter-link">
					<i class="icon-twitter"></i>
				</li>
			</ul>
			<ul class="list-buttons">
				<li id="open-basket" class="list-buttons__item list-buttons__basket">
					<i class="icon-basket"></i>
					<span id="items-in-basket">0</span>
				</li>
				<li id="change-topic" class="list-buttons__item list-buttons__topic">
					<i class="icon-sun-inv"></i>
					<i class="icon-moon-inv"></i>
				</li>
			</ul>
		</div>

	</div>
</div>
</header>

<button class="open-menu none" id="open-menu">открыть меню</button>
  <div class="basket-menu">
    <div class="basket-menu__inner">
      <div class="basket-menu__top-row">
        <div class="basket-menu__cross" id="basket__button-cross">
          <span class="cross"></span>
        </div>
      </div>
      <div class="basket-menu__empty-block">
        <p class="empty-block__text">
          Ваша корзина пуста
        </p>
        <img src="/img/empty-cart.png" alt="cart" class="img img__dark">
        <img src="/img/empty-cart-white.png" alt="cart" class="none img img__white">
      </div>
      <div class="basket-menu__cards-list">
      </div>
      <div class="basket-menu__bottom-row">
        <div class="delivery-wrapper">
          <p class="paid-delivery">
            Доставка: <span class="delivery-price">100 </span>грн
          </p>
          <p class="free-delivery none">
            Доставка <span>бесплатная</span>
          </p>    
        </div>
        <p class="total-price">
          Всего: <span class="price" id="total-price">0</span> грн
        </p>
      </div>

    </div>
  </div>
  <div class="container">
    <aside id="menu">
      <div class="menu__top-row">
        <button class="close-menu" id="close-menu">
          <span class="cross"></span>
        </button>
      </div>
      <ul class="menu-list">



        <li class="menu-list__item" id="menu-item" link="pizza-page">
          <div class="menu-list__item__inner">
            <img class="icon" src="/img/icons-food/icon-pizza.png" alt="" />
            <img class=" icon-white none" src="/img/icons-food/icon-pizza-white.png" alt="" />
            <p class="name">Пицца</p>
          </div>
        </li>

        <li class="menu-list__item" id="menu-item" link="sushi-page">
          <div class="menu-list__item__inner">
            <img class="icon" src="/img/icons-food/icon-sushi.png" alt="" />
            <img class=" icon-white none" src="/img/icons-food/icon-sushi-white.png" alt="" />
            <p class="name">Суши</p>
          </div>
        </li>

        <li class="menu-list__item" id="menu-item" link="drinks-page">
          <div class="menu-list__item__inner">
            <img class="icon" src="/img/icons-food/icon-drink.png" alt="" />
            <img class=" icon-white none" src="/img/icons-food/icon-drink-white.png" alt="" />
            <p class="name">Напитки</p>
          </div>
        </li>

        <li class="menu-list__item" id="menu-item" link="desserts-page">
          <div class="menu-list__item__inner">
            <img class="icon" src="/img/icons-food/icon-desert.png" alt="" />
            <img class=" icon-white none" src="/img/icons-food/icon-desert-white.png" alt="" />
            <p class="name">Дессерты</p>
          </div>
        </li>

        <li class="menu-list__item" id="menu-item" link="sauces-page">
          <div class="menu-list__item__inner">
            <img class="icon" src="/img/icons-food/icon-sauce.png" alt="" />
            <img class=" icon-white none" src="/img/icons-food/icon-sauce-white.png" alt="" />
            <p class="name">Соусы</p>
          </div>
        </li>



      </ul>
    </aside>
    <main>
      <ul class="products-list" id="products-list">
      </ul>
    </main>
  </div>
`


let body = document.body
body.insertAdjacentHTML("afterbegin", HTMLpage)



const tagHTML = document.querySelector("html")

if(tagHTML.hasAttribute("main-page")) {
  const main = document.querySelector("main")
  main.remove()
}