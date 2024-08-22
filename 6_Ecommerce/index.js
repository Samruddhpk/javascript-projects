// global imports - used in almost every files
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';

// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';

const init = async () => {
    const products = await fetchProducts();
    if (products) {
        // add products to store
        setupStore(products);
        const featuredProducts = store.filter((product) => product.featured === true);
        display(featuredProducts, getElement('.featured-center'));
    }
};



// load all initial
window.addEventListener("DOMContentLoaded", init);