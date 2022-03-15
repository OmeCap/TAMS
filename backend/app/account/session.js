const uuid = require('uuid');
const { hash } = require('./helper.js');

const SEPARATOR = '|';

// Session string for an account
class Session {
    constructor({ username }) {
        this.username = username;
        this.id = uuid.v4();
    }

    toString() {
        const { username, id } = this;

        return Session.sessionString({ username, id });
    }

    static parse(sessionString) {
        const sessionData = sessionString.split(SEPARATOR);

        return {
            username: sessionData[0],
            id: sessionData[1],
            sessionHash: sessionData[2]
        };
    }

    // Retrieve account data, then compare hashed account data with session hash.
    static verify(sessionString) {
        const { username, id, sessionHash } = Session.parse(sessionString);

        const accountData = Session.accountData({ username, id });

        return hash(accountData) === sessionHash;
    }

    static accountData({ username, id }) {
        return `${username}${SEPARATOR}${id}`;
    }

    static sessionString({ username, id }) {
        const accountData = Session.accountData({ username, id });

        return `${accountData}${SEPARATOR}${hash(accountData)}`;
    }
}

module.exports = Session;