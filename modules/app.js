import { render } from './render.js';
// variable creation
let readLater = [];

let readArticles = [];

const inputEl = document.querySelector('#input');

const list = document.querySelector('#list');

const saveInput = document.querySelector('#save');

const deleteBtn = document.querySelector('#delete-all');

const saveTab = document.querySelector('#save-tab');

// parse converts string to obj stringify turns into a string
// turn local storage into obj
const readLaterLocalStorage = JSON.parse(localStorage.getItem('readLater'));
// https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage

// check if readLaterLocalStorage is truthy on site load/refresh
if (readLaterLocalStorage) {
  // set readLater to its value and call renderList()
  readLater = readLaterLocalStorage;
  // render the items based upon the array
  render(readLater);
}

// double click event
deleteBtn.addEventListener('dblclick', () => {
  localStorage.clear();
  readLater = [];
  list.textContent = '';
});

// Save Tab
saveTab.addEventListener('click', () => {
  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {})
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    // grab url of the tab
    readLater.push(tabs[0].url);
    localStorage.setItem('readLater', JSON.stringify(readLater));
    list.textContent = '';
    render(readLater);
  });
});

saveInput.addEventListener('click', () => {
  if (inputEl.value) {
    // push the text input inside of the readLater array
    readLater.push(inputEl.value);
    list.textContent = '';
    // set the local storage and turn it into a string
    localStorage.setItem('readLater', JSON.stringify(readLater));
    inputEl.value = '';
    // reset the text input value
    // render the item
    render(readLater);

    // have to use '' for get item
    // console.log(localStorage.getItem('readLater'));
  }
});
// (value, key) local storage only takes in strings
// localStorage.setItem('article', 'www.example.com');
// removes local storage
// localStorage.clear()
