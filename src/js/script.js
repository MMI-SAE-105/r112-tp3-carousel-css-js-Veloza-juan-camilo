// *** CAROUSEL ***
// TODO --> De acuerdo ! :D

const carousel = document.querySelector('.carousel__container');
const carouselItems = document.querySelector('.carousel__constrols');

// carousel.scrollLeft = 520;

// carousel.scrollBy({ left: +260, behavior: "smooth" });

// carousel.scrollright = 260;

const careousel1 = document.querySelector('.carousel__container');

const prevButton = document.querySelector('.carousel__button--prev');

const nextButton = document.querySelector('.carousel__button--next');

if (carousel) {
    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -560, behavior: "smooth" });
});
    nextButton.addEventListener('click', () => {
        carousel = carousel.scrollBy({ left: +560, behavior: "smooth" });

    });
}