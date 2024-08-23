// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';

//  filter imports
import setupSearch from '../filters/search.js';
import setupCompanies from '../filters/companies.js';
import setupPrice from '../filters/price.js';

// specific imports
import { setupStore, store } from '../store.js';
import display from '../displayProducts.js';
import { getElement } from '../utils.js';
import fetchProducts from "../fetchProducts.js";

const loading = getElement(".page-loading");


// we get products only when visit homepage first and then products , what if user directly visit products page? - products not loading...So,,
const init = async () => {
    const loading = getElement(".page-loading");
    if (store.length < 1) {
        const products = await fetchProducts();
        setupStore(products);
    }

    display(store, getElement('.products-container'));
    setupSearch(store);
    setupCompanies(store);
    setupPrice(store);
    loading.style.display = "none";
};

init();


// // See, this is the beauty of re-usable code.
// display(store, getElement(".products-container"));

// // search filter
// setupSearch(store);

// // company buttons filter
// setupCompanies(store);


// // price filter
// setupPrice(store);



// loading.style.display = "none";