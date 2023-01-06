const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const btn_less = document.getElementById('btn_less');
const btn_plus = document.getElementById('btn_plus');
const amountText = document.getElementById('amount');
const cartNumber = document.getElementById('cart-number');

let amount = 0

btn_less.addEventListener('click', () => {
    amount -= 1;
    if (amount < 0) {
        amount = 0;
    }
    amountText.innerHTML = amount;
});

btn_plus.addEventListener('click', () => {
    amount += 1;
    amountText.innerHTML = amount;
});

function addToCart() {
    cartNumber.innerHTML = amount;
    cartNumber.classList.remove('d-none');
    cartNumber.classList.add('d-inline');
    
}
