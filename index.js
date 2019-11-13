const app = require('./app');
const port = 5500;

app.get('/', (req, res) => (
    res.send("hello world")
))

app.listen(port, () => (
    console.log(`\n *** Listening on port ${port} *** \n`)
));
