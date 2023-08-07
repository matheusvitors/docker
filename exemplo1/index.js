const express = require('express'); 

const app = express(); 
const port = 8000;

app.get('/', (req, res) => {
    res.json({ message: 'Está funcionando...' })
})

app.listen(8000, () => {
    console.log(`Server executando na porta ${port}`);
})