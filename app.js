let readLater = [];

const inputEl = document.querySelector('#input');

const list = document.querySelector('#list');

const saveInput = document.querySelector('#save');

// render
function renderList() {
  const li = document.createElement('li');
  list.append(li);
  const a = document.createElement('a');
  a.textContent = inputEl.value
  a.setAttribute('href', a.textContent)
  a.setAttribute('target', '_blank')
  li.append(a)
  
}
//  or
function renderItem() {
  const listItem = document.createElement('li');
  readLater.forEach((item) => {
    listItem.textContent = item[item.length - 1];
    list.append(listItem);
  });
}


saveInput.addEventListener('click', () => {
  readLater.push(inputEl.value);
  console.log(readLater);
  renderList();
  inputEl.value = ''
});
