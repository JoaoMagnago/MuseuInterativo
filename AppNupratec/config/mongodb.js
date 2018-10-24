const MongoClient = require('mongodb').MongoClient;

let connection = null;

async function connectionMongoDB(url) {

    if (connection == null) {
        await MongoClient.connect(url)
        .then(con => {
            connection = con;

            process.on('SIGINT', () => {
                connection.close(() => {
                    console.log('Finish MongoClient!');
                    process.exit(0);
                });
            });
        })
        .catch(err => {
            console.error(err);
            throw err;
        });
    }

    return connection;
}

module.exports = connectionMongoDB;