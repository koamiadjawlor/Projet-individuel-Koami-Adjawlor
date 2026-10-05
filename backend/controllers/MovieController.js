// Pourcentage de code personnel : 80%
import Movie from "../models/MovieModel.js";
import { Op } from "sequelize";

export const getMovies = async (req, res) => {
    try {
        const search = req.query.search || "";
        const movies = await Movie.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.like]: '%' + search + '%' } },
                    { genre: { [Op.like]: '%' + search + '%' } }
                ]
            },
            order: [['id', 'DESC']]
        });
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addMovie = async (req, res) => {
    try {
        await Movie.create(req.body);
        res.status(201).json({ message: "Film ajouté avec succès !" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};