const { Videogame, Genre } = require("../db.js");
const createVideogame = async (videogame, rating) => {
 
  const { name, releaseDate, imageUrl, description, platforms, genres } = videogame;
 
  try {
        const videogameCreated = await Videogame.create({
            name,
            releaseDate,
            imageUrl,
            description,
            rating: rating,
            platforms,
            createdInDb: true
          })
          // Asociar los géneros al videojuego creado
          for (const genero of genres) {
            const generoDb = await Genre.findOne({
              where: {
                id: genero,
              },
            });
            if (generoDb) {
              await videogameCreated.addGenre(generoDb);
            }
          }  
          return res.send(videogameCreated);
      }
   catch (error) {
      throw new Error("Error creating videogame: " + error.message);
  }
}


  module.exports = createVideogame