// using constructor function

function Counter(element, value) {
    // console.log(element, value);
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector(".reset");
    this.decreaseBtn = element.querySelector(".decrease");
    this.increaseBtn = element.querySelector(".increase");
    this.valueDOM = element.querySelector(".value");
    this.valueDOM.textContent = this.value;

    //*** Error if do add call this proto or any functions ***
    //app.js:20 Uncaught TypeError: Cannot set properties of undefined(setting 'textContent')
    // at Counter.increase(app.js: 20: 31)
    // this.increaseBtn.addEventListener("click", this.increase); => here it is referencing to button which is calling callback function - where event is attached to. So it wont call any functions written inside the Counter constructor functions

    // * so use bind() to wrap it & make this points to the Counter.
    // this.increaseBtn.addEventListener("click", this.increase.bind(this)); //✅ this works

    // * or we can bind all functions and call them on event fires
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    // * add events
    this.increaseBtn.addEventListener("click", this.increase);
    this.decreaseBtn.addEventListener("click", this.decrease);
    this.resetBtn.addEventListener("click", this.reset);

}

// prototype functions

Counter.prototype.increase = function () {
    this.value++;
    this.valueDOM.textContent = this.value;
};

Counter.prototype.decrease = function () {
    this.value--;
    this.valueDOM.textContent = this.value;
};

Counter.prototype.reset = function () {
    this.value = 0;
    this.valueDOM.textContent = this.value;
};
// get element
function getElement(selection) {
    const element = document.querySelector(selection);

    if (element) {
        return element;
    } else {
        throw new Error(`Please check selection "${selection}",no such element exists.`);
    }
}

const counter1 = new Counter(getElement(".first-counter"), 100);
const counter2 = new Counter(getElement(".second-counter"), 200);


// call constructor function with instances

counter1.increase();
counter1.increase();
counter1.increase();
counter1.decrease();
counter1.reset();
counter2.reset();