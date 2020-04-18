const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/user', function (req, res) {
        res.send('User route');
 })
 

app.listen(port, () => console.log(`Example app listening at http://localhost:3000`))
