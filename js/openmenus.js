const htmlElement = document.querySelector("html")

const buttonOpenMenu = document.querySelector("#open-menu");

const main = document.querySelector("main");
const header = document.querySelector("header")
const menu = document.querySelector("#menu");
const basketMenu = document.querySelector(".basket-menu")



buttonOpenMenu.addEventListener("click", function openMenu(event) {
	menu.classList.add("showed");
	main.classList.add("opacity");
	header.classList.add("opacity");
});

document.addEventListener("click", function closeMenu(event) {
	if (menu.classList.contains("showed") && !event.target.closest("#open-menu")) {
		if (!event.target.closest("#menu")) {

			menu.classList.remove("showed");
			main.classList.remove("opacity");
			header.classList.remove("opacity");
		}
	}
	if (event.target.closest("#close-menu")) {
		menu.classList.remove("showed");
		main.classList.remove("opacity");
		header.classList.remove("opacity");
	}
})



window.addEventListener("resize", function (event) {
	const pageWidth = document.documentElement.clientWidth;
	if (!htmlElement.hasAttribute("main-page") && pageWidth > 900) {
		menu.classList.remove("hidden-menu");
		menu.classList.remove("showed");
		if (!basketMenu.classList.contains("basket-menu-showed")) {
			main.classList.remove("opacity")
			header.classList.remove("opacity");
		}
	}
	else if (pageWidth < 900) {
		menu.classList.add("hidden-menu");
	}
});



window.addEventListener("load", function addClass(event) {
	const pageWidth = document.documentElement.clientWidth;
	if (htmlElement.hasAttribute("main-page") || pageWidth < 900) {
		menu.classList.add("hidden-menu");
	}
})









const basketButton = document.querySelector("#open-basket")
basketButton.addEventListener("click", function openBasketMenu(event) {
	basketMenu.classList.add("basket-menu-showed")
	main.classList.add("opacity")
	header.classList.add("opacity");
	menu.classList.add("opacity")
})


document.addEventListener("click", function closeBasketMenu(event) {
	if (event.target.closest("#basket__button-cross")) {
		basketMenu.classList.remove("basket-menu-showed")
		main.classList.remove("opacity")
		header.classList.remove("opacity");
		menu.classList.remove("opacity")
	}



	if(
		   !event.target.closest(".basket-menu-showed") 
		&& !event.target.closest("#open-basket")
		&& !event.target.closest("#delete-from-basket")
		&& !event.target.closest('[data-action="basket-minus"]')
		&& !menu.classList.contains("showed")
		){
		basketMenu.classList.remove("basket-menu-showed")
		main.classList.remove("opacity")
		header.classList.remove("opacity");
		menu.classList.remove("opacity")
	}
})