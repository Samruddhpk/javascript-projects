//   ATTENTION!!!!!!!!!!!
//   I SWITCHED TO PERMANENT DOMAIN
//   DATA IS THE SAME JUST A DIFFERENT URL,
//   DOES NOT AFFECT PROJECT FUNCTIONALITY

// URLS
const allProductsUrl = 'https://www.course-api.com/javascript-store-products';
// temporary single product
// 'https://www.course-api.com/javascript-store-single-product?id=rec43w3ipXvP28vog'
const singleProductUrl =
  'https://www.course-api.com/javascript-store-single-product';


// functions
const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(
    `Please check "${selection}" selector, no such element exist`
  );
};

// price needs to be formatted in such way
// api has price in whole value in cents(US currency) => 999 (not 999 dollars) => should be 9.99(9 dollars 99 cents)
const formatPrice = (price) => {
  let formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format((price / 100).toFixed(2));
  return formattedPrice;
};

// local storage 
const getStorageItem = () => {
  let storageItem = localStorage.getItem("store") ? JSON.parse(localStorage.getItem("store")) : [];
  return storageItem;
};

const setStorageItem = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export {
  allProductsUrl,
  singleProductUrl,
  getElement,
  formatPrice,
  getStorageItem,
  setStorageItem,
};
