const mongo = require('./client/mongoose');
const amqp = require('./client/amqp');
const redis = require('./client/redis');
const pg = require('./client/pg');

module.exports = {
    createClient: async function (type, connectionURL) {
        let client;
        switch (type) {
            case 'mongo':
                client = await mongo(connectionURL);
                break;
            case 'amqp':
                client = await amqp(connectionURL);
                break;
            case 'redis':
                client = await redis(connectionURL);
                break;
            case 'pg':
                client = await pg(connectionURL);
                break;
        }
        return client;
    }
};