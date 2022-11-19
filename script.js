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
})