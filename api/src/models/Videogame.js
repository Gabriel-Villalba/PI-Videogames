const {DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

  // defino el modelo para VIDEOGAME
  // modelName / attributes / options
  module.exports = {
   modelVideogame: conn =>{
      conn.define ( 
        // defino el modelo para videogame
        'videogame', {
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          description: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          imageUrl:{
            type : DataTypes.STRING,
            defaultValue:'https://via.placeholder',
            allowNull: false
          },   
          platforms: {
            type: DataTypes.STRING,
            allowNull: false
          }, 
          releaseDate: {
            type: DataTypes.STRING
          },   
          rating: {
            type: DataTypes.INTEGER
          },
          id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
          },
        }, {timestamps: true,//* guarda el Time de cuando se creo el dato
            createdAt: 'creado', //* fecha que se creo
            updatedAt: false //* fecha que se modificó
        }
      )
   
    }
   
  };
  

