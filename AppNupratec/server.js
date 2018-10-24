const app = require('./config/express')();
const server = require('http').createServer(app);
let connection = null;

(async () => {
    connection = await require('./config/mongodb')('mongodb://localhost:27017/nupratec');
    app.db = connection.db();
})();

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});