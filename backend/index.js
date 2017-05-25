let express = require('express');
const app = express();

app.listen(3456, () => {
    console.log('Server Start');
})

app.get('/', (req,res) => {
    res.send('Hello World');
});