//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Videogame} = require('./src/db.js');
const axios = require('axios');
const dot = require('dotenv')
// const {getAllVideogames} = require ("./src/controllers/videogamesControllers.js")
// let cacheDB= async function obtenerVideogames() {
//   try {
//     const videogames = await getAllVideogames();
//     console.log(videogames); // Aquí obtendrás el resultado real
//   } catch (error) {
//     console.error("Error al obtener los videojuegos:", error);
//   }
// }
// cacheDB()

dot.config()
 axios.defaults.baseURL = 'http://localhost:3001'; //*establece la URL base para todas las solicitudes realizadas con la biblioteca Axios


let local = "";

// if(process.env.PORT == 3001){
//   local = "http://localhost:3001";
// }else{
//   local = "";
// }

// Syncing all the models at once.
console.log(process.env.PORT)
// Syncing all the models at once.
conn.
sync({ force: true })
//.then(() => saveInfoInDB(cacheDB, Videogame))
.then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
