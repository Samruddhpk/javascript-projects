const paginate = (followers) => {
    const itemsPerPage = 10;
    const numOfPages = Math.ceil(followers.length / itemsPerPage);
    // console.log(numOfPages);

    const newFollowers = Array.from({ length: numOfPages }, (_, index) => {
        const start = index * itemsPerPage;
        return followers.slice(start, start + itemsPerPage);
    });
    return newFollowers;
};

export default paginate;