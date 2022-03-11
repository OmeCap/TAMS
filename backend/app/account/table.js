const pool = require('../../databasePool.js');

// Static class methods that interact with the database

class AccountTable {
    static storeAccount({ username, passwordHash }) {
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO account("username", "passwordHash") VALUES($1, $2)',
                [username, passwordHash],
                (error, response) => {
                    if (error) return reject(error);

                    resolve();
                }
            );
        });
    }

    static getAccount({ username }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT id, "passwordHash", "sessionId" FROM account 
                WHERE "username" = $1`,
                [username],
                (error, response) => {
                    if (error) return reject(error);

                    resolve({ account: response.rows[0] });
                }
            )
        });
    }

    static updateSessionId({ sessionId, username }) {
        return new Promise((resolve, reject) => {
            pool.query(
                'UPDATE account SET "sessionId" = $1 WHERE "username" = $2',
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