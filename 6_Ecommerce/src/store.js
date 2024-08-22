import { getStorageItem, setStorageItem } from './utils.js';
let store = [];
const setupStore = (products) => {
    // adding products to store
    store = products.map((product) => {
        const { id, fields: { featured, name, price, company, colors, image: img } } = product;
        const image = img[0]?.thumbnails?.large?.url;
        return { id, featured, price, name, company, colors, image };
    });
};

console.log(store);
const findProduct = () => { };
export { store, setupStore, findProduct };
