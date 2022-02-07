// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');


const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

setDate();

const addNewTask = document.getElementById('complete-form');

addNewTask.addEventListener('click', (e) => {
    e.preventDefault();
    const text = input.value;
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;

});




/*

const addNewTask = event => {
    event.preventDefault();
    const { value } = event.target.taskText;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task', 'roundBorder');
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    tasksContainer.prepend(task);
    event.target.reset();
};

const changeTaskState = event => {
    event.target.classList.toggle('done');
};

const order = () => {
    const done = [];
    const toDo = [];
    tasksContainer.childNodes.forEach( el => {
        el.classList.contains('done') ? done.push(el) : toDo.push(el);
    })
    return [...toDo, ...done];
};

const renderOrderedTasks = () => {
    order().forEach(el => tasksContainer.appendChild(el));
};




/*
Lo que quiero: Crear una nueva tarea que este clasificada por colores
segun importancia

    rojo: urgente
    amarillo: no muy urgente
    verde: puede esperar

Cuando se hace una tarea nueva, debe quedar al principio

Las tareas se deben almacenar en una caja abajo donde:
- Las tareas se puedan editar
- Las tareas se puedan borrar
- Las tareas se puedan marcar como completas
    Las tareas completadas se deben mandar abajo de todo
- Las tareas se les pueda cambiar el color 

*/