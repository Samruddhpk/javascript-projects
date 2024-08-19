// get element
function getElement(selection) {
    const element = document.querySelector(selection);

    if (element) {
        return element;
    } else {
        throw new Error(`Please check selection "${selection}",no such element exists.`);
    }
}


class Counter {
    constructor(element, value) {
        this.counter = element;
        this.value = value;
        this.resetBtn = element.querySelector(".reset");
        this.decreaseBtn = element.querySelector(".decrease");
        this.increaseBtn = element.querySelector(".increase");
        this.valueDOM = element.querySelector(".value");
        this.valueDOM.textContent = this.value;

        // * or we can bind all functions and call them on event fires
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.reset = this.reset.bind(this);

        // * add events
        this.increaseBtn.addEventListener("click", this.increase);
        this.decreaseBtn.addEventListener("click", this.decrease);
        this.resetBtn.addEventListener("click", this.reset);
    }

    increase() {
        this.value++;
        this.valueDOM.textContent = this.value;
    }

    decrease() {
        this.value--;
        this.valueDOM.textContent = this.value;
    }
    reset() {
        this.value = 0;
        this.valueDOM.textContent = this.value;
    }
}

const counter1 = new Counter(getElement(".first-counter"), 100);
const counter2 = new Counter(getElement(".second-counter"), 200);
