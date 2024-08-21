const container = document.querySelector(".container");

const displayFollowers = async (followers) => {
    const followersList = followers.map((person) => {
        const { avatar_url, html_url, login } = person;
        return `<article class="card">
            <img src="${avatar_url}" />  
            <h4>${login}</h4>
            <a href="${html_url}" class="btn">View Profile</a>
        </article>`;

    }).join("");

    container.innerHTML = followersList;
};

export default displayFollowers;