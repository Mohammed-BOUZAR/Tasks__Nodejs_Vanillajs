const router = require('express').Router();

const tasks = [];
let counter = 1;

router.get('/', (req, res) => {
    res.status(200).json(tasks);
});

router.post('/', (req, res) => {
    const { title } = req.body;
    const task = {
        id: counter,
        title
    }
    console.log("title: ")
    console.log(title)
    tasks.push(task);
    console.log(tasks)
    counter++;
    res.status(201).json(task);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const task = tasks.find(ele => ele.id == id);
    if (!task) return res.status(400).json({ message: "this task not exist!" });
    task.title = title;
    res.status(200).json(task);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    let task = tasks.find(ele => ele.id == id);
    console.log(task);
    console.log(tasks);
    if (!task) return res.status(400).json({ message: "this task not exist!" });
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    res.status(200).json({message: "Deleted with succes"});
});

module.exports = router;
