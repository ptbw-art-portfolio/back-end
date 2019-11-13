const app = require('./app');
const port = 5500;

app.get('/', (req, res) => (
    res.send("hello world")
))

app.listen(port, () => (
    console.log("Welcome to Art Portfolio")
));
