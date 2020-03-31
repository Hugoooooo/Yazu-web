var owl = $('.brand-slide');
owl.owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2000,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    center: true,
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 3
        },
        760: {
            items: 4
        },
        992: {
            items: 6
        }
    }
});