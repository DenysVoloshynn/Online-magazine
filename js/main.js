"use strict";




const menuItems = document.querySelectorAll("#menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", function addClassActive(event) {
    const otherMenuItems = document.querySelectorAll(".menu-list__item-active");
    otherMenuItems.forEach((item) => {
      item.classList.remove("menu-list__item-active");
    });

    const currItem = event.target.closest("#menu-item");
    currItem.classList.add("menu-list__item-active");
  });
});



// ====================================================================================



const bodyElement = document.body
const buttonChangeTopic = bodyElement.querySelector("#change-topic")


buttonChangeTopic.addEventListener("click", function changeTopic (event) {
  bodyElement.classList.toggle("dark-theme")

    localStorage.setItem("dark-theme", "false")

    if(bodyElement.classList.contains("dark-theme")) {
        localStorage.setItem("dark-theme", "true")
    }
})



window.addEventListener("DOMContentLoaded", function addOrRemoveDarkTheme (event) {
   if(this.localStorage.getItem("dark-theme") == "true") {
    bodyElement.classList.add("dark-theme")
   }
})




// ====================================================================================



document.addEventListener("click", function changePage (event) {

  if(event.target.closest('[link]')) {
    
    const pathname = window.location.pathname

    const arrayStrings = pathname.split("/")
    arrayStrings[1] = event.target.closest("[link]").getAttribute("link")

    const newPath = arrayStrings.join("/")

    console.log(newPath);

    setTimeout(function() {
      window.location.pathname = newPath
    }, 180);
  }
})


window.addEventListener("DOMContentLoaded", function (event) {
  const pathname = this.window.location.pathname

  const folderName = pathname.split("/")[1]

  const allBtns = this.document.querySelectorAll(".menu-list__item")

  for(let btn of allBtns) {
    if(btn.getAttribute("link") == folderName) {
      btn.classList.add("menu-list__item-active")
    }
  }
})



// ====================================================================================



const networksList = document.querySelector(".list-socials")
console.log(networksList);

networksList.addEventListener("click", function(event){
  if(event.target.closest(".instagram-link")) {
    window.location.href = "https://www.instagram.com/smile.food/"
  }
  if(event.target.closest(".facebook-link")) {
    window.location.href = "https://www.facebook.com/SmilefoodOfficial/"
  }
  if(event.target.closest(".twitter-link")) {
    window.location.href = "https://twitter.com/smileffcoffee/with_replies"
  }
})