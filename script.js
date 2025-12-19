const sections = document.querySelectorAll('section');
const navitems = document.querySelectorAll('.nav-items');

const ObserveOptions = {
    threshold : 0.5
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            // removes the active class from the nav-item
            navitems.forEach(item => item.classList.remove('active'));

            const index = Array.from(sections).indexOf(entry.target);
            if(navitems[index]) {
                navitems[index].classList.add('active');
            }
        }
    });
},ObserveOptions);

sections.forEach(section => {
    observer.observe(section);
});

function scrollToSection(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
    });
}