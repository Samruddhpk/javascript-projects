const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
    const value = (el.dataset.value);
    // console.log(value);
    const increment = Math.ceil(value / 1000);
    // console.log(increment);
    let initialValue = 0;


    // setInterval
    const increaseCount = setInterval(() => {
        initialValue += increment;
        if (initialValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }
        el.textContent = `${initialValue}+`;
    }, 1);
};


items.forEach((item) => {
    // console.log(item);
    updateCount(item);
});