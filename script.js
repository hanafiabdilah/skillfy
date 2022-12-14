$(document).ready(() => {

    const navbar = document.querySelector('nav')
    const checkNavbarIsTop = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scroll')
        } else {
            navbar.classList.remove('scroll')
        }
    }

    checkNavbarIsTop()

    addEventListener('scroll', () => {
        checkNavbarIsTop()
    })

    const coursePrevButton = $(".course .dots-nav button.prev");
    const courseNextButton = $(".course .dots-nav button.next");
    const courseCarousel = $(".course .items")
    courseCarousel.owlCarousel({
        margin: 20,
        items: 1,
        dots: true,
        responsive: {
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    coursePrevButton.click(() => {
        courseCarousel.trigger('prev.owl.carousel')
    })
    courseNextButton.click(() => {
        courseCarousel.trigger('next.owl.carousel')
    })


    const partnerPrevButton = $(".partner .nav .prev")
    const partnerNextButton = $(".partner .nav .next")
    const partnerCarousel = $('.partner .items')
    partnerCarousel.owlCarousel({
        center: true,
        margin: 50,
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            768: {
                items: 3,
            },
            900: {
                items: 4,
            },
            1200: {
                items: 5,
            },
            1400: {
                items: 6
            }
        }
    })
    partnerPrevButton.click(() => {
        partnerCarousel.trigger('prev.owl.carousel')
    })
    partnerNextButton.click(() => {
        partnerCarousel.trigger('next.owl.carousel')
    })

    const reviewPrevButton = $(".review .nav .prev")
    const reviewNextButton = $(".review .nav .next")
    const reviewCarousel = $('.review .items')
    reviewCarousel.owlCarousel({
        margin: 50,
        items: 1,
        loop: true,
        responsive: {
            900: {
                items: 2,
            }
        }
    })
    reviewPrevButton.click(() => {
        reviewCarousel.trigger('prev.owl.carousel')
    })
    reviewNextButton.click(() => {
        reviewCarousel.trigger('next.owl.carousel')
    })
})