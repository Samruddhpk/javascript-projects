const url = 'https://www.course-api.com/javascript-store-single-product';

const singleProductDOM = document.querySelector(".product");



const fetchProduct = async () => {
    try {
        singleProductDOM.innerHTML = "<div class='loading'></div >";
        // get id param from url bar
        const params = new URLSearchParams(window.location.search);
        const id = params.get("id");
        console.log(id);
        const response = await fetch(`${url}?id=${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        singleProductDOM.innerHTML =
            '<p class="error">There was a problem loading the product. Please try again later </p>';
    }
};

const displayProduct = (product) => {
    const { company, colors, description, name: title, price, image } = product.fields;
    const { url: img } = image[0];
    const formatPrice = price / 100;
    document.title = title.toUpperCase();

    // set colors

    const colorsList = colors.map((color) => {
        return ` <span class="product-color" style="background: ${color}"></span>`;
    }).join("");

    singleProductDOM.innerHTML = ` <div class="product-wrapper" >
        <img src="${img}" class="img" alt="${title}" />
        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>${formatPrice}</span>
          <div class="colors">
            ${colorsList}
          </div>
          <p>
           ${description}
          </p>
          <button class="btn">add to cart</button>
        </div>
      </ > `;
};

const start = async () => {
    const product = await fetchProduct();
    displayProduct(product);
};

start();