AOS.init();

// Active menu
let burger = document.querySelector(".burger");
let menu = document.querySelector(".header");
burger.addEventListener("click", () => menu.classList.toggle("activebrgr"));

// Animation block content testimonial
function toggleItem(elem) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].addEventListener("click", function(e) {
            var current = this;
            for (var i = 0; i < elem.length; i++) {
                if (current != elem[i]) {
                    elem[i].parentElement.classList.remove('active');
                    const el = elem[i].getAttribute('data-id');
                    document.getElementById(el).classList.remove('active');
                } else if (current.classList.contains('active') === true) {
                    current.parentElement.classList.remove('active');
                    const el = current.getAttribute('data-id');
                    document.getElementById(el).classList.remove('active');
                } else {
                    current.parentElement.classList.add('active');
                    const el = current.getAttribute('data-id');
                    document.getElementById(el).classList.add('active');
                }
            }
            e.preventDefault();
        });
    };
}
toggleItem(document.querySelectorAll('.testimonial--body--list--item--link'));


// Animation dash icon testimonial
const charts = document.getElementsByClassName( "testimonial--head--icon" );
function isVisible ( element ) {
    const
        viewPortHeight = window.innerHeight,
        scrollTop = window.scrollY,
        currElementPosY = element.offsetTop,
        elementHeight = element.offsetHeight;
    return ( currElementPosY + elementHeight > scrollTop && currElementPosY < ( viewPortHeight + scrollTop ) )
}

function animateDashWhenVisible ( chart ) {
    if ( isVisible( chart[0] )  ) {
        chart[0].classList.add("animation");
    } else {
        chart[0].classList.remove("animation");
    }
}

window.addEventListener( 'scroll', function () {
    animateDashWhenVisible( charts );
} );
animateDashWhenVisible( charts );
