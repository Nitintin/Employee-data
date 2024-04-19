const express = require('express')
const {Employee} =  require('./Data/Employee.js');

console.log('Employee', Employee);
const PORT = process.env.PORT || 5001;

const app = express();

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/employees', (req, res) => {
    res.send(Employee);
});

app.get('/portraits/:portraitName', (req, res) => {
    const { portraitName } = req.params;
    const portraitPath = `./portraits/${portraitName}`;
    res.sendFile(portraitPath, { root: __dirname });
});

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));