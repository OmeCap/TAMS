const pool = require('../../databasePool.js');

// Static class methods that interact with the database

class AccountTable {
    // Store username and passwordHash to the table.
    static storeAccount({ username, passwordHash, accountType, fullName }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO users("username", "passwordHash", "accountType", "fullName") 
                VALUES($1, $2, $3, $4)`,
                [username, passwordHash, accountType, fullName],
                (error, response) => {
                    if (error) return reject(error);

                    resolve();
                }
            );
        });
    }

    // Get user details using username.
    static getAccount({ username }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT "userId", "passwordHash", "sessionId", "accountType", "fullName" 
                FROM users 
                WHERE "username" = $1`,
                [username],
                (error, response) => {
                    if (error) return reject(error);

                    resolve({ account: response.rows[0] });
                }
            )
        });
    }

    // Update sessionId using username.
    static updateSessionId({ sessionId, username }) {
        return new Promise((resolve, reject) => {
            pool.query(
                'UPDATE users SET "sessionId" = $1 WHERE "username" = $2',
                [sessionId, username],
                (error, response) => {
                    if (error) return reject(error);

                    resolve();
                }
            )
        }) 
    }
}

module.exports = AccountTable;