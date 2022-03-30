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
export function render(arr) {
  arr.forEach((item, index) => {
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
