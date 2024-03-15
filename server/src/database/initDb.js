import { MYSQL_DATABASE } from '../../env.js';
import { getPool } from "./getPool.js";

async function initDb () {
    try {
        
        const pool = await getPool();
        await pool.query(`USE ${MYSQL_DATABASE}`);
        await pool.query('DROP TABLE IF EXISTS users');
        await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id CHAR(36) PRIMARY KEY NOT NULL,
        username VARCHAR(30) UNIQUE NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(100) NOT NULL,
        active BOOLEAN DEFAULT false,
        registrationCode CHAR(36),
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
      );
        `);
    
        console.log('Database initalizated ✅');
        process.exit(0)

    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

initDb();