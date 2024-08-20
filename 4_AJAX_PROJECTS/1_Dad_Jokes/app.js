const url = "https://icanhazdadjoke.com/";



const jokeBtn = document.querySelector(".jokeBtn");
const result = document.querySelector(".result");


const fetchJokes = async () => {
    try {
        // loading text
        result.innerHTML = `<p>Loading...</p>`;
        const response = await fetch(url, {
            headers: {
                Accept: "application/json",
                "User-Agent": "personal project"
            }
        });
        // any network error - if no endpoints match
        if (!response.ok) {
            throw new Error("There was an error...");
        }
        const data = await response.json();
        result.innerHTML = `<p>${data.joke}</p>`;
    } catch (error) {
        console.log(error);
        result.innerHTML = `<p>${error.message}</p>`;
    }

};

fetchJokes();

jokeBtn.addEventListener("click", () => {
    fetchJokes();
});

