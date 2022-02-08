'use strict'
window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_element = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        console.log("submit form");
    });
});