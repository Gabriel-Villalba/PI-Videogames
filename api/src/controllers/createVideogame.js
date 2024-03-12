const { Videogame, Genre } = require("../db.js");

const createVideogame = async (videogame) => {
  
  console.log(videogame.platforms);
  const { name, releaseDate, imageUrl, description, platforms, genres } = videogame;
 
  try {
      const [newVideogame, created] = await Videogame.findOrCreate({
          where: {
              name: name,
              releaseDate: releaseDate,
              imageUrl: imageUrl,
              description: description,
              rating: rating,
          },
          defaults: {
              platforms: platforms,
          },
      });

      if (!created) {
          throw new Error("This videogame already exists");
      } else {
          // Agregar géneros al videojuego recién creado
          await newVideogame.setGenres(genres);
          return newVideogame;
      }
  } catch (error) {
      throw new Error("Error creating videogame: " + error.message);
  }
};


  module.exports = createVideogame