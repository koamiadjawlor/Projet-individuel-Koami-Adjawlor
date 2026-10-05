// Pourcentage de code personnel : 90%
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Movie = db.define('movies', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    releaseYear: DataTypes.INTEGER,
    rating: DataTypes.FLOAT,
    image: DataTypes.STRING
}, {
    freezeTableName: true
});

export default Movie;

(async () => {
    await db.sync();
})();