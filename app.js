window.onload = function() {

  onReady();
};
function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');


  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    toDoList.appendChild(newLi);
    newToDoText.value = '';

  });
}

window.onload = funtion( {})
