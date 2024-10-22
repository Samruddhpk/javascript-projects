import get from "./getElement.js";
import { hideLoading } from "./toggleLoading.js";

const displayDrinks = ({ drinks }) => {
    const section = get(".section-center");
    const title = get(".title");

    if (!drinks) {
        hideLoading();
        title.textContent = 'sorry ,no drinks matched';
        section.innerHTML = null;
        return;
    }

    const newDrinks = drinks.map((drink) => {
        const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
        return `<a href = "singleDrink.html">
            <article class="cocktail" data-id="${id}">
                <img src="${image}" alt="${name}" />
                <h3>${name}</h3>
            </article>
        </ > `;
    }).join("");
    hideLoading();
    title.textContent = "";
    section.innerHTML = newDrinks;
    return section;
};

export default displayDrinks;