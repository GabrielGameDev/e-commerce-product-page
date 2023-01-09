const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const btn_less = document.getElementById('btn_less');
const btn_plus = document.getElementById('btn_plus');
const amountText = document.getElementById('amount');
const cartNumber = document.getElementById('cart-number');

const cardText = "<div class='d-flex justify-content-center align-items-center gap-2'><img src='images/image-product-1-thumbnail.jpg'  alt=''  width='40px'  height='40px'  class='rounded'/><p class='card-text'>  Fall Limited Edition Sneakers $125.00 x 3  <span class='fw-bolder'>$375.00</span></p><img src='images/icon-delete.svg' alt='' /></div><button class='btn btn-warning mx-auto my-3 w-100 py-3 bg-dark-orange text-white'>Checkout</button>"
const cardTextEmpty = "Your cart is empty"
const cardCart = document.querySelector('.card');
const cardBody = document.querySelector('.card-body');
let cardVisible = false;

let amount = 0

const mainImage = document.querySelector('.main-img');
console.log(mainImage)

btn_less.addEventListener('click', () => {
    amount -= 1;
    if (amount < 0) {
        amount = 0;
    }
    if(cardVisible)
        showCart()
    amountText.innerHTML = amount;
});

btn_plus.addEventListener('click', () => {
    amount += 1;
    if(cardVisible)
        showCart()
    amountText.innerHTML = amount;
});

function addToCart() {
    cartNumber.innerHTML = amount;
    if (amount > 0) {
        cartNumber.classList.remove('d-none');
        cartNumber.classList.add('d-inline');
    } else {
        cartNumber.classList.remove('d-inline');
        cartNumber.classList.add('d-none');
    }

    if(cardVisible)
    showCart()
}

function showCart(){
    cardVisible = !cardVisible;
    if (amount > 0) {
        cardBody.innerHTML = cardText;
    } else {
        cardBody.innerHTML = cardTextEmpty;
    }
    if (cardVisible) {
        cardCart.classList.remove('d-none');
        cardCart.classList.add('d-block');
    }
    else {
        cardCart.classList.remove('d-block');
        cardCart.classList.add('d-none');
    }
}

function changeImage(image, e) {                                        
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach(thumb => {
        thumb.classList.remove('thumb-active');
        thumb.parentNode.classList.remove('active-background');
    });
    e.classList.add('thumb-active');
    e.parentNode.classList.add('active-background');
    mainImage.src = image;
}
    
