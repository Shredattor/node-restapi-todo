var mongoose = require('mongoose');

const db_name = 'app_db';
const catalog = 'mongodb://127.0.0.1:27017/' + db_name

mongoose.connect(catalog, {useMongoClient: true})
        .then(() => console.log('Connected to db: '+catalog))
        .catch((err) => console.log('There was an error when connecting to db: '+catalog));