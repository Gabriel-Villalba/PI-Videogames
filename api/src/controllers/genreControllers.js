const { Genre } = require("../db");
const { APIKEY } = process.env;
const axios = require("axios");
const { getAllVideogames } = require("./videogamesControllers");

const getGenres = async (req, res) => {
  try {
    const apiGenres = await axios.get(
      `https://api.rawg.io/api/genres?key=${APIKEY}`
    );
    const apiResponse = apiGenres.data.results.map((genre) => {
      return {
        id: genre.id,
        name: genre.name,
      };
    });
    apiResponse.forEach(async (genre) => {
      await Genre.findOrCreate({
        where: {
          id: genre.id,
          name: genre.name,
        },
      });
    });
    return res.send(apiResponse);
    
  } catch (error) {
    console.log("Error de genre",error);
     res.status(404).send(error);
   }
};

const getByGenre = async (req, res) => {
  try {
    const { name } = req.params;
    if (name) {
      const allVg = await getAllVideogames()
      const filteredByGenre = allVg.filter(
        (el) => el.genres.includes(name)
      );
      filteredByGenre
        ? res.status(200).json(filteredByGenre)
        : res.status(404).send("Not found");
    }
  } catch (error) {
    console.log("No hay nada jaja");
  }
};

module.exports = {
  getGenres,
  getByGenre,
};
