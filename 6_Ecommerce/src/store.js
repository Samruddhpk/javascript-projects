import { getStorageItem, setStorageItem } from './utils.js';
// initial store array / get store array from local storage
let store = getStorageItem("store");

const setupStore = (products) => {
    // adding products to store
    store = products.map((product) => {
        const { id, fields: { featured, name, price, company, colors, image: img } } = product;
        const image = img[0]?.thumbnails?.large?.url;
        return { id, featured, price, name, company, colors, image };
    });
    // from here storing store=products in localStorage
    setStorageItem("store", store);
};

const findProduct = () => { };
export { store, setupStore, findProduct };
