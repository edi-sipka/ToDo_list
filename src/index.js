import './style.css';

const list = [
  {
    index: 0,
    description: 'Wake up at 10',
    completed: false,
  },
  {
    index: 1,
    description: 'Send an email',
    completed: false,
  },
  {
    index: 2,
    description: 'Go to Gym',
    completed: true,
  },
  {
    index: 3,
    description: 'Call Mirza',
    completed: false,
  },
];

const listTask = () => {
  const container = document.getElementById('data');
  for (let i = 0; i < list.length; i += 1) {
    const datas = document.createElement('div');
    datas.classList.add('list-to-do');
    datas.innerHTML = `
    <div class="list-el">
    <input type="checkbox">
    <h3>${list[i].description}</h3>
    </div>
    `;
    container.appendChild(datas);
  }
};
listTask();
