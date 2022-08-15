import { clearing, clear } from './clear.js';

const tasklistDisplay = document.querySelector('.data');
const inputValue = document.querySelector('.new-task');
const addButton = document.querySelector('.add-to-list');
const deleteBtn = document.querySelector('.delete');

let taskList = JSON.parse(localStorage.getItem('localItem')) || [];

const display = () => {
  tasklistDisplay.innerHTML = '';
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];
  taskList.forEach((task) => {
    const tasklistDisplay = document.querySelector('.data');
    const list = document.createElement('div');
    const comp = task.completed ? 'checked' : '';
    list.classList.add('list');
    list.innerHTML = `
    <input type="checkbox" class="check" ${comp} id="check" data-set="${task.index}" >
    <input class="edit" type="text" value="${task.description}" id="text">
    <div class="can">
    <i id="${task.index}" class="fa-solid fa-trash-can"></i>
    </div>
    `;
    tasklistDisplay.appendChild(list);
    const taskList2 = list.children[1];
    taskList2.addEventListener('change', () => {
      const listingData = document.querySelector('.data');
      const arrayList = Array.from(listingData.children);
      const index = arrayList.indexOf(list);
      const taskLocal = JSON.parse(localStorage.getItem('localItem'));
      taskLocal[index].description = taskList2.value;
      localStorage.setItem('localItem', JSON.stringify(taskLocal));
    });
  });
};
display();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (inputValue.value === '') return;
  taskList = JSON.parse(localStorage.getItem('localItem')) || [];

  const objects = {
    description: inputValue.value,
    index: taskList.length,
    completed: false,
  };
  taskList.push(objects);
  localStorage.setItem('localItem', JSON.stringify(taskList));

  inputValue.value = '';
  display();
});
const removeListing = (index) => {
  const removeList = taskList.filter((element) => element.index !== index);
  taskList.length = 0;
  let i = 0;
  removeList.forEach((element) => {
    element.index = i;
    i += 1;
  });
  taskList.push(...removeList);
  localStorage.setItem('localItem', JSON.stringify(taskList));
  display();
};

tasklistDisplay.addEventListener('click', (e) => {
  if (e.target.classList.contains('fa-solid')) {
    const index = parseInt(e.target.getAttribute('id'), 10);
    removeListing(index);
  }
});

tasklistDisplay.addEventListener('click', clearing);
deleteBtn.addEventListener('click', () => {
  clear();
  display();
});
