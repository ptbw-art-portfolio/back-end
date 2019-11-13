const app = require('./app');
const port = process.env.PORT || 5000;

app.get('/', (req, res) => (
    res.send("<h1>Welcome to Art Portfolio API</h1>")
))

app.listen(port, () => (
    console.log(`\n *** Listening on port ${port} *** \n`)
));
