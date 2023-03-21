import { form, url, tasks } from "./config.js";
import { allTasks } from "./tasks.js";

export const addTask = () => {
    const formData = new FormData(form);

    console.log("entries: ")
    console.log(Object.fromEntries(formData.entries()))
    fetch(`${url}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
    })
        .then(response => response.json())
        .then(data => addElement(data))
        .catch(err => {
            alert(err)
        });
}

export const addElement = data => {
    const task = document.createElement('div');
    const taskInfo = document.createElement('div');
    const btnsOd = document.createElement('div');
    const dlt = document.createElement('button');
    const text = document.createElement('p');
    const top = document.createElement('button');
    const bottom = document.createElement('button');

    task.classList.add('task');
    dlt.classList.add('delete');
    taskInfo.classList.add('taskInfo');
    btnsOd.classList.add('btnOd');
    top.classList.add('top');
    bottom.classList.add('bottom');


    text.innerText = data.title;
    dlt.innerText = 'X';
    top.innerText = 'Top';
    bottom.innerText = 'Bottom';

    btnsOd.appendChild(top);
    btnsOd.appendChild(bottom);

    taskInfo.appendChild(text);
    taskInfo.appendChild(dlt);

    task.appendChild(taskInfo);
    task.appendChild(btnsOd);

    tasks.appendChild(task);

    dlt.addEventListener('click', () => {
        fetch(`${url}/tasks/${data.id}`, {
            method: "DELETE"
        })
            .then(response => {
                task.remove();
            })
            .catch(err => {
                alert(err)
            });
    });

    top.addEventListener('click', () => {
        
    });
    
    bottom.addEventListener('click', () => {
        
    });
}

