let burger = document.querySelector(".burger");
let menu = document.querySelector(".header");
burger.addEventListener("click", () => menu.classList.toggle("activebrgr"));

let linkTestimonial = document.querySelector(".testimonial--body--list--item--link").href
console.log(linkTestimonial)

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
