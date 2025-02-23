let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let section = document.querySelector('.section');
let items = document.querySelectorAll('.list .item');
let indicators = document.querySelector('.indicators ul');
let dots = document.querySelectorAll('.indicators ul li');
let slideNumber = document.querySelector('.slide-number');
let list = section.querySelector('.list');
let activeIndex = 0;
let lastIndex = items.length - 1;
function updateActiveSlide(index) {
    // Remove a classe 'active' do item atual
    document.querySelector('.list .item.active')?.classList.remove('active');
    items[index].classList.add('active');
    // Remove a classe 'ativo' dos dots
    document.querySelector('.indicators ul .ativo')?.classList.remove('ativo');
    dots[index].classList.add('ativo');
    // Atualiza o número do slide ativo
    slideNumber.innerHTML = '0' + (index + 1);
}
// Avançar slide
nextButton.onclick = () => {
    list.style.setProperty('--calculo', 1);
    activeIndex = (activeIndex + 1) > lastIndex ? 0 : activeIndex + 1;
    updateActiveSlide(activeIndex);
};
// Voltar slide
prevButton.onclick = () => {
    list.style.setProperty('--calculo', -1);
    activeIndex = (activeIndex - 1) < 0 ? lastIndex : activeIndex - 1;
    updateActiveSlide(activeIndex);
};
// Adicionar funcionalidade para clicar nos dots
dots.forEach((dot, index) => {
    dot.onclick = () => {
        activeIndex = index;
        updateActiveSlide(activeIndex);
    };
});
// Inicializar o primeiro slide como ativo
updateActiveSlide(activeIndex);