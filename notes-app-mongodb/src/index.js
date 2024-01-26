require('dotenv').config();
const {connectToDatabase} = require('./database');
connectToDatabase();
const app = require ('./server');


app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
