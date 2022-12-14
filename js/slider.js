const slider = document.querySelector(".gallery-swiper")

const swiper = new Swiper(slider, {
    grabCursor: true,
    loop: true,
    speed: 900,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,  
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableInteraction: false,  // отключить автопрокрутку после ручного переключеня
    },
})








const sliderReviews = document.querySelector(".review-swiper")
console.log(sliderReviews);


const swiperReviews = new Swiper(sliderReviews, {
    speed: 800,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
     type: "progressbar",
        clickable: true,         
    }
})



// const sliderReviews = document.querySelector(".review-swiper")

// const swiperReviews = new Swiper(slider, {
//     grabCursor: true,
//     speed: 700,
//     pagination: {
//         el: ".swiper-pagination",
//         type: "bullets",
//         clickable: true,  
//         dynamicBullets: true,
//     },
//     autoplay: {
//         delay: 3000,
//         stopOnLastSlide: false,
//         disableInteraction: false,  // отключить автопрокрутку после ручного переключеня
//     },
// })