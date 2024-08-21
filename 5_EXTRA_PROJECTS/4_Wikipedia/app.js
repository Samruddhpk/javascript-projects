const url =
    'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';


// selectors

const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const resultsDOM = document.querySelector(".results");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchValue = input.value;
    if (!searchValue) {
        resultsDOM.innerHTML = `<h4>please enter value to search...</h4>`;
        return;
    }
    fetchPages(searchValue);
});


const fetchPages = async (searchValue) => {
    try {
        resultsDOM.innerHTML = `<div class="loading"></div>`;
        const response = await fetch(`${url}${searchValue}`);
        const data = await response.json();
        const results = data.query.search;
        if (results.length < 1) {
            resultsDOM.innerHTML = `<h3>no matching results. Please try again</h3>`;
        }
        renderArticles(results);
    } catch (err) {
        resultsDOM.innerHTML = `<h3>There was an error...</h3>`;
    }
};


const renderArticles = (results) => {
    const cardsList = results.map((result) => {
        const { title, snippet, pageid } = result;

        return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
            <h4>${title}</h4>
            <p>
              ${snippet}
            </p>
          </a>`;
    }).join("");

    resultsDOM.innerHTML = ` <div class="articles">
    ${cardsList}
    </div>`;
};