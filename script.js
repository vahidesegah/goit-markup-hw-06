const hamburgerButton = document.getElementById("hamburger");
const isOpen = document.getElementById("is-open");
const closeButton = document.getElementById("menu-button");
const orderServices= document.getElementById('order-services-button')
const modalButton = document.getElementById('modal-button')
const modal = document.getElementById('modal')

hamburgerButton.addEventListener("click", () => {
  isOpen.classList.add("is-open-menu");
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener("click", () => {
  isOpen.classList.remove("is-open-menu");
  document.body.style.overflow = '';
});

orderServices.addEventListener('click', () => {
    modal.classList.add('is-open-modal');
})
modalButton.addEventListener('click', () => {
    modal.classList.remove('is-open-modal')
})

window.onclick = function (e) {
    if(e.target == modal) {
        modal.classList.remove('is-open-modal')
    }
} 