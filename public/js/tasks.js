import { url } from "./config.js";
import { addElement } from "./metier.js";

export const allTasks = async () => {
    let tasks;
    fetch(`${url}/tasks`)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            addElement(element);
        });
    })
    .catch((err) => {
        alert(err);
    });
    console.log("tasks: ");
    console.log(tasks);
}