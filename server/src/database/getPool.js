import mysql from 'mysql2/promise'

import {
    MYSQL_DATABASE,
    MYSQL_HOST,
    MYSQL_USER,
    MYSQL_PASSWORD,
} from '../../env.js'

let pool;

export async function getPool() {
    try {

        if (!pool) {
            // Temporal pool prevents from error of not existing DB
            const poolTemp = mysql.createPool({
              host: MYSQL_HOST,
              user: MYSQL_USER,
              password: MYSQL_PASSWORD,
            });
        
            await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${MYSQL_DATABASE}`)

            pool = mysql.createPool({
                connectionLimit: 10,
                host: MYSQL_HOST,
                user: MYSQL_USER,
                password: MYSQL_PASSWORD,
                database: MYSQL_DATABASE,
                //UTC (Coordinated Universal Time), for consistency 
                timezone: 'Z',
            });
         }
            
        return pool;
    
    } catch (error) {
        console.error(error);
    }
}
