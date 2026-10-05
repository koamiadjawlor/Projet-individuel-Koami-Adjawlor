// Pourcentage de code personnel : 100%
import express from "express";
import cors from "cors";
import MovieRoutes from "./routes/MovieRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(MovieRoutes);

// C'est cette ligne qui maintient le serveur éveillé sur le port 5555
app.listen(5555, () => {
    console.log("Serveur CineScope opérationnel sur le port 5555...");
});