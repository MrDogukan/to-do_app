const addForm = document.querySelector('.add');
const list = document.querySelector('.todolist');
const comItem = document.querySelector('.complete');
const addToDo = document.querySelector(".add-to-do");


const generateListe = todo => {
  const html = `
  <li class="list-item"><i class="far fa-check-circle complete"></i>
  <span>${todo}</span><i class="far fa-trash-alt delete"></i></li>`;
  list.innerHTML += html;
};

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});



list.addEventListener('click', e => {
  if (e.target.classList.contains("complete")) {
    if ((e.target.parentElement).style.textDecoration != 'line-through')
      (e.target.parentElement).style.textDecoration = 'line-through';
    else (e.target.parentElement).style.textDecoration = 'none';
  }
});

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateListe(todo);
    addForm.reset();
  }
});

addToDo.addEventListener('click', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
      generateListe(todo);
      addForm.reset();
    }
  });
