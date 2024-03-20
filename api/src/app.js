const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
/* apikey = 057930cad82e48c6b6021966d913c76a*/

require('./db.js');

const server = express();

server.name = 'API';


server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));//*Este método incorporado en Express se utiliza para reconocer el objeto de solicitud entrante como cadenas o matrices.
//*Es especialmente útil para analizar datos en solicitudes POST y PUT.

server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*"); //* Este encabezado indica a los navegadores web 
                                                  //*que se permiten solicitudes CORS desde cualquier origen.
  res.header('Access-Control-Allow-Credentials', 'true');//*Este encabezado indica a los navegadores web 
                                                          //*que se permiten solicitudes CORS con credenciales.
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');//* Este encabezado indica a los navegadores web que se permiten 
                                                                                                //*solicitudes CORS con los encabezados especificados.
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');//*Este encabezado indica a los navegadores web que se permiten 
                                                                               //*solicitudes CORS con los métodos HTTP especificados.
  next();
});

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
