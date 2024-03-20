const { Genre } = require("../db");
const { APIKEY } = process.env;
const axios = require("axios");
const { getAllVideogames } = require("./videogamesControllers");

const getGenres = async (req, res) => {
  try {
    const apiGenres = await axios.get(
      //* me traigo todos los generos dela api
      `https://api.rawg.io/api/genres?key=${APIKEY}`
    );
    const apiResponse = apiGenres.data.results.map((genre) => ({
      id: genre.id,
      name: genre.name,
    }));
    console.log(apiGenres);

    for (const genre of apiResponse) {
      await Genre.findOrCreate({
        where: {
          id: genre.id,
        },
        defaults: {
          name: genre.name,
        },
      });
    }

    return res.send(apiResponse);
  } catch (error) {
    console.error("Error fetching genres:", error.message);
    res.status(500).send("Error fetching genres.");
  }
};

const getByGenre = async (req, res) => {
  console.log("Estamos aca con Berni estamos aca con papa", req.params);
  try {
    const { name } = req.params;
    if (name) {
      const allVg = await getAllVideogames();
      const filteredByGenre = allVg.filter((el) => el.genres.includes(name));
      console.log(filteredByGenre);
      filteredByGenre.length > 0
        ? res.status(200).json(filteredByGenre)
        : res
            .status(404)
            .send("Le erraste alphabet lore y alphabet lore russian");
    }
  } catch (error) {
    console.error("Error filtering by genre:", error.message);
    res.status(500).send("Error filtering by genre.");
  }
};

module.exports = {
  getGenres,
  getByGenre,
};
// const getGenres = async (req, res) => {
//   try {
//     const apiGenres = await axios.get(
//       `https://api.rawg.io/api/genres?key=${APIKEY}`
//     );
//     const apiResponse = apiGenres.data.results.map((genre) => {
//       return {
//         id: genre.id,
//         name: genre.name,
//       };
//     });
//     apiResponse.forEach(async (genre) => {
//       await Genre.findOrCreate({
//         where: {
//           id: genre.id,
//           name: genre.name,
//         },
//       });
//     });
//     return res.send(apiResponse);

//   } catch (error) {
//     console.log("Error de genre",error);
//      res.status(404).send(error);
//    }
// };

// const getByGenre = async (req, res) => {
//   try {
//     const { name } = req.params;
//     if (name) {
//       const allVg = await getAllVideogames()
//       const filteredByGenre = allVg.filter(
//         (el) => el.genres.includes(name)
//       );
//       filteredByGenre
//         ? res.status(200).json(filteredByGenre)
//         : res.status(404).send("Not found");
//     }
//   } catch (error) {
//     console.log("No hay nada jaja");
//   }
// };

// module.exports = {
//   getGenres,
//   getByGenre,
// };
