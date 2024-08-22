import { getElement } from '../utils.js';

const toggleCartBtn = getElement(".toggle-cart");
const cartOverlay = getElement(".cart-overlay");
const closeCartBtn = getElement(".cart-close");


// show/hide cart sidebar when clicked on toggle Cart btn from any page
toggleCartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("show");
});

closeCartBtn.addEventListener("click", () => {
    cartOverlay.classList.remove("show");
});


// this function works when clicked on any product with cart-icon clicked
// directly added that product to cart and opens the cart sidebar
export const openCart = () => { };
