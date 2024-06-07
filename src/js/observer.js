const observer = new IntersectionObserver(entries => { entries.forEach( entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
    }else {
        entry.target.className.remove('show');
    }
});
},
{
    threshold:0.5,
}
);

const cards = document.querySelectorAll('.services__card');

cards.forEach( card => {
    observer.observe(card)
});