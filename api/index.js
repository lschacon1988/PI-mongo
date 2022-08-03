
const server = require('./src/app.js');
require('./src/db')
require('dotenv').config()

server.set('port', process.env.PORT || 3001);
server.listen(server.get('port'), () => {
    console.log('Listen server on port', server.get('port'));
});
// server.listen( , ()=>{
//     console.log(`%s listening at 3001`);
// })