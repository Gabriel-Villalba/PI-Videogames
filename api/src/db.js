require('dotenv').config();
const {Sequelize} = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST,} = process.env;
const {modelGenre} = require ("./models/Genre")
const{modelVideogame} = require ("./models/Videogame")

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
modelGenre(sequelize)//*CREATE TABLE genre
modelVideogame(sequelize)

const Genre = sequelize.models.genre
const Videogame = sequelize.models.videogame
// Aca vendrian las relaciones
Videogame.belongsToMany(Genre, { through: 'VideogameGenre' });//* atraves de :
Genre.belongsToMany(Videogame, { through: 'VideogameGenre' });
// hasOne 1 - 1 
// hasMany 1 - N / role.hasMany(user)
// belongsTo N - 1
// belongsToMany N - N
module.exports = {
  Genre,
  Videogame,
  conn: sequelize,     //* para importart la conexión { conn } = require('./db.js');
};
