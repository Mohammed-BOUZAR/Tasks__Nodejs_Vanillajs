const express = require('express');
const session = require('express-session');
const app = express();
const tasks = require('./routes/tasks');

require('dotenv').config();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SECRET,
    cookie: {
        httpOnly: true
    }
}));

app.use('/tasks', tasks);
app.get('/destroy', (req, res)=>{
    req.session.destroy();
    res.status(200).send({message: "New Session!"})
});

app.use((req, res) => {
    res.status(404).json({ message: "Not Found!" });
});

app.listen(process.env.PORT, () => console.log(`listening ${process.env.PORT}`));