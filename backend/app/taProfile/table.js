const pool = require('../../databasePool');

class TaProfileTable {
    static storeProfile({ email, upi, homeAddress, currentYear, roleType, feeStatus}) {
        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO 
                taProfile("email", "upi", "homeAddress", "currentYear", "roleType", "feeStatus")
                VALUES ($1, $2, $3, $4, $5, $6)`,
                [email, upi, homeAddress, currentYear, roleType, feeStatus],
                (error, response) => {
                    if (error) return reject(error);

                    resolve();
                }
                
            )
        });
    }

    static getProfile({ email }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT id FROM taProfile WHERE email = $1`,
                [email],
                (error, response) => {
                    if (error) return reject(error);

                    resolve({ profile: response.rows[0] });
                }
            )
        });
    } 
}



module.exports = TaProfileTable;