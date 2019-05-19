//add item to List
const form = document.querySelector('#addForm');
const itemList = document.querySelector('#items');
const filter = document.querySelector('#filter');

//event listener for when clicking submit, the function will occur
form.addEventListener('submit', addItem);
function addItem(e) {
  e.preventDefault();
  //need to get the value of the inputed item
  let newItem = document.querySelector('#item').value;

  //once the value is received, create new li for the submitted item
  let li = document.createElement('li');
  //add the classes
  li.className = 'list-group-item';
  //add the newItem into the li
  // let node = document.createTextNode('newItem');
  li.appendChild(document.createTextNode(newItem));

  //add the x button on the appended li
  let deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('x'));

  li.appendChild(deleteBtn);
  //append the li into the item list
  itemList.appendChild(li);

}

//remove item by clicking on the deleteBtn

itemList.addEventListener('click', removeItem)
function removeItem(e) {
  //if the click event targets the x button, execute the function to remove the item
  if (e.target.classList.contains('delete')) {
    let li = e.target.parentElement;
    itemList.removeChild(li);
  }
}

//filter through the list of items to find what you want
filter.addEventListener('keyup', filterItems);
function filterItems(e) {
  let text = e.target.value;
  let items = itemList.getElementsByTagName('li');
  //creates array of li and loop through the array
  Array.from(items).forEach(function(item){
    //for each item in items, you get the textContent
    let itemName = item.firstChild.textContent; //in this case, one item is one li and firstChild would be the 
    //if it's not equal to -1, then it is a match
    if(itemName.indexOf(text) != -1) {
      item.style.display = 'block'; //show item as a block if it matches
    } else {
      item.style.display = 'none'; //hides if it doesnt match
    }
  })
}
