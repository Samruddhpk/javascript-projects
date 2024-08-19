// select items

const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


// edit option
let editFlag = false;
let editId = "";
let editElement;

// event listeners
// submit form
form.addEventListener("submit", addItem);

// clear list
clearBtn.addEventListener("click", clearItems);
// display items onload
window.addEventListener("DOMContentLoaded", setupItems);


// ***** functions *****

// add item
function addItem(e) {
    e.preventDefault();
    // get input

    const value = grocery.value;
    const id = new Date().getTime().toString();

    if (value && !editFlag) {
        // create list item
        createListItem(id, value);
        // displayAlert
        displayAlert("item added to the list", "success");
        // show Container
        container.classList.add("show-container");
        // set local storage
        addToLocalStorage(id, value);
        // set Back to default
        setBackToDefault();
    }
    else if (value !== "" && editFlag) {
        editElement.innerHTML = value;
        displayAlert("value changed", "success");

        // edit local storage
        editLocalStorage(editId, value);
        setBackToDefault();
    } else {
        displayAlert('please enter value', "danger");
    }
}

// display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // after displaying - remove alert
    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

// clear items
function clearItems() {
    const items = document.querySelectorAll(".grocery-item");
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        });
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "danger");
    setBackToDefault();
    localStorage.removeItem("list");
}

// delete item
function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);

    if (list.children.length === 0) {
        container.classList.remove("show-container");
    }
    displayAlert("item removed", "danger");
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id);
}
// edit item
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;

    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;

    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;

    submitBtn.textContent = "edit";

}

// set back to defaults
function setBackToDefault() {
    grocery.value = "";
    editFlag = false;
    editId = "";
    submitBtn.textContent = "submit";
}

// **** localStorage ****

// add to local storage
function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
}

// get from local storage
function getLocalStorage() {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];
}
// remove from localStorage(id)
function removeFromLocalStorage(id) {
    let items = getLocalStorage();

    items = items.filter(function (item) {
        if (id !== item.id) return item;
    });
    localStorage.setItem("list", JSON.stringify(items));
}

// edit localStorage(id,value)
function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;

    });
    localStorage.setItem("list", JSON.stringify(items));
}

//  **** setup items ****

// setupItems()
function setupItems() {
    let items = getLocalStorage();
    if (items.length > 0) {
        items.forEach(function (item) {
            createListItem(item.id, item.value);
        });
        container.classList.add("show-container");
    }
}

// createListItem(id,value)
function createListItem(id, value) {
    const element = document.createElement("article");
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.classList.add("grocery-item");
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

    // add event listeners for both edit & delete
    const editBtn = element.querySelector(".edit-btn");
    const deleteBtn = element.querySelector(".delete-btn");
    editBtn.addEventListener("click", editItem);
    deleteBtn.addEventListener("click", deleteItem);

    // append child
    list.appendChild(element);
}