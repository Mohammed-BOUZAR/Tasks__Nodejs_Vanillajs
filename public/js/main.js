import { reset, submit, title, url } from "./config.js";
import { addTask } from "./metier.js";
import { allTasks } from "./tasks.js";

allTasks();
submit.addEventListener('click', e => {
    e.preventDefault();
    addTask();
})

reset.addEventListener('click', e => {
    e.preventDefault();
    title.value = "";
});

refresh.addEventListener('click', () => {
    fetch(`${url}/destroy`)
    .then((result) => {
        console.log(result);
    }).catch((err) => {
        alert(err)
    });
})