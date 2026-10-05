// Pourcentage de code personnel : 100%
import express from "express";
import { getMovies, addMovie } from "../controllers/MovieController.js";

const router = express.Router();

router.get('/movies', getMovies);
router.post('/movies', addMovie);

export default router; 