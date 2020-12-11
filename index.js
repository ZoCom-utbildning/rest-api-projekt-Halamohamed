const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 1212 ;
const api = require('./routers/app');


  app.use('/api', api);
  app.use(bodyParser.json());
  app.use(express.static('public'));
  
  app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});