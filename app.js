// variable creation
let readLater = [];

let readArticles = [];

const inputEl = document.querySelector('#input');

const list = document.querySelector('#list');

const saveInput = document.querySelector('#save');

const deleteBtn = document.querySelector('#delete-all');

// parse converts string to obj stringify turns into a string
// turn local storage into obj
const readLaterLocalStorage = JSON.parse(localStorage.getItem('readLater'));
// https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage

// console.log(readLaterLocalStorage);


// check if readLaterLocalStorage is truthy on site load/refresh
if (readLaterLocalStorage) {
  // set readLater to its value and call renderList()
  readLater = readLaterLocalStorage;
  console.log('This is your list', readLater);
  // render the items based upon the array
  render(readLater);
}

// double click event
deleteBtn.addEventListener('dblclick', () => {
  localStorage.clear();
  readLater = [];
  list.textContent = '';
});

// (value, key) local storage only takes in strings
// localStorage.setItem('article', 'www.example.com');
// removes local storage
// localStorage.clear()

// render single item used for the save input
function renderList() {
  // create list item
  const li = document.createElement('li');
  // append list item
  list.append(li);
  // create anchor tag
  const a = document.createElement('a');
  // set the text content = to the inputs values as well as the href
  a.textContent = inputEl.value;
  a.setAttribute('href', a.textContent);
  a.setAttribute('target', '_blank');
  // append the anchor tag inside of the list item
  li.append(a);
}
//  For Each
// renders the whole list and keeps track of the local store
function render(articles) {
  articles.forEach((item) => {
    // create a list item and append it the UL element
    const listItem = document.createElement('li');
    list.append(listItem);
    // create an anchor tag, set text content, href, and target
    const a = document.createElement('a');
    a.textContent = item;
    a.setAttribute('href', a.textContent);
    a.setAttribute('target', '_blank');
    // append anchor inside the list
    listItem.append(a);
  });
}

saveInput.addEventListener('click', () => {
  if (inputEl.value) {
    // push the text input inside of the readLater array
    readLater.push(inputEl.value);
    // set the local storage and turn it into a string
    localStorage.setItem('readLater', JSON.stringify(readLater));
    // render the item
    renderList();
    // reset the text input value
    inputEl.value = '';

    // have to use '' for get item
    // console.log(localStorage.getItem('readLater'));
  }
});
