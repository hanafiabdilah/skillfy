$(document).ready(() => {

    const coursePrevButton = $(".course .dots-nav button.prev");
    const courseNextButton = $(".course .dots-nav button.next");
    const courseCarousel = $(".course .items")
    courseCarousel.owlCarousel({
        margin: 10,
        items: 3,
        dots: true,
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
        items: 6,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000
    })
    partnerPrevButton.click(() => {
        partnerCarousel.trigger('prev.owl.carousel')
    })
    partnerNextButton.click(() => {
        partnerCarousel.trigger('next.owl.carousel')
    })
})