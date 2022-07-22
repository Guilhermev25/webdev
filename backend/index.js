const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor online...")
})


app.get('/todo', (req, res) => {
    res.send(data)
})

app.get('/todo/:task', (req, res) => {
    const {task} = req.params;
    if (!(task in data)) {
        res.status(404);
        res.send();
        return;
    }
    res.send(data[task]);
})

app.post('/todo', (req, res) => {
    const {task} = req.body;
    data[task] = "pending";
    res.status(201); 
    res.send();
})

app.put('/todo/:task', (req, res) => {
    const {task} = req.params;
    if (!(task in data)) {
        res.status(404);
        res.send();
        return;
    }
    const {status} = req.body;
    data[task] = status;
    res.status(200);
    res.send();
})

app.delete('/todo/:task', (req, res) => {
    const {task} = req.params;
    if (!(task in data)) {
        res.status(404);
        res.send();
        return;
    }
    delete data[task];
    res.status(200);
    res.send();
})

const data = {}