// Pourcentage de code personnel : 90%
import { Sequelize } from "sequelize";

const db = new Sequelize('cinescope_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default db;