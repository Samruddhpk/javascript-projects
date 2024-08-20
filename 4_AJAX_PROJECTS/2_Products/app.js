const allProductsURL = "https://www.course-api.com/javascript-store-products";


// selectors
const productsDOM = document.querySelector(".products-center");
// functions


// fetch
const fetchProducts = async () => {
    productsDOM.innerHTML = `<div class="loading"></div>`;

    try {
        const response = await fetch(allProductsURL);
        const data = await response.json();
        return data;
    } catch (err) {
        productsDOM.innerHTML = `<p class="error">there was an error...</p>`;
    }
};

// display
const displayProducts = (list) => {

    const productList = list.map((product) => {
        const { id } = product;
        const { name: title, price } = product.fields;
        const { url: img } = product.fields.image[0];
        const formatPrice = price / 100;

        return `<a href="singleProduct.html?id=${id}" class="single-product">
            <img src="${img}" class="single-product-img img" alt="${title}" />
            <footer>
              <h5 class="name">${title}</h5>
              <span class="price">$${formatPrice}</span >
            </footer >
          </a > `;
    }).join("");
    productsDOM.innerHTML = `
    <div class="products-container">
    ${productList}
    </div>
    `;
};

// start
const start = async () => {
    const data = await fetchProducts();
    displayProducts(data);
};


start();
