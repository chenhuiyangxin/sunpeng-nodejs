var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'root',
        password : '564438',
        database : 'factory'
    },
    pool: {
        min: 0,
        max: 7
    }
});
exports.db=knex;
