import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    const btns = ["all", ...new Set(store.map((product) => product.company))];
    const companiesDOM = getElement(".companies");

    // render buttons
    companiesDOM.innerHTML = btns.map((btn) => {
        return `<button class="company-btn">${btn}</button>`;
    }).join("");

    // select each button to filter
    companiesDOM.addEventListener("click", function (e) {
        const el = e.target;
        if (el.classList.contains("company-btn")) {
            let newStore = [];
            if (el.textContent === "all") {
                newStore = [...store];
            } else {
                newStore = store.filter((product) => product.company === el.textContent);
            }
            display(newStore, getElement(".products-container"), true);
        }
    });

};

export default setupCompanies;
