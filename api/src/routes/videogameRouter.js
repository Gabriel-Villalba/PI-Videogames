const { Router } = require("express");
const createVideogame = require ("../controllers/createVideogame")
const videogameRouter = Router();
const { Videogame, Genre } = require("../db.js");
// Ruta para crear un videojuego: http://localhost:3001/videogame/create
videogameRouter.post("/create", async (req, res) => {
  try {
    let rating =parseInt(req.body.rating)
    const { name, releaseDate, imageUrl, description, platforms, genres } = req.body;
    // Crear un nuevo registro de videojuego
     const videogameCreated = await /*createVideogame ({ name, releaseDate, imageUrl, description, platforms, genres }, rating)*/
    Videogame.create({
      name,
      releaseDate,
      imageUrl,
      description,
      rating: rating,
      platforms,
      createdInDb: true,
    });
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
 catch (e) {
    console.error(e);
    return res.status(500).send("Error al crear el videojuego.");
  }
});

module.exports = videogameRouter;



// const { Router } = require("express");

// const createVideogame = require ("../controllers/createVideogame.js")
// const videogameRouter = Router();

// //http://localhost:3001/videogames.

// videogameRouter.post("/create", async (req, res) => {
//   try {
//     const { name, releaseDate, rating, imageUrl, description, platforms, genres } = req.body;
//     const videogameCreated =await createVideogame(name, releaseDate, rating, imageUrl, description, platforms, genres);
//     res.status(200).json(videogameCreated)
// }catch(error){
//     res.status(400).json({error:error.message})
//     }

// })

// module.exports = videogameRouter




