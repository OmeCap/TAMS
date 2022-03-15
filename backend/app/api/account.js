const { Router } = require('express');
const AccountTable = require('../account/table.js');
const Session = require('../account/session.js');
const { hash } = require('../account/helper.js');
const { setSession, authenticatedAccount } = require('./helper.js');

const router = new Router();

router.post('/signup', (req, res, next) => {
    const { username, password } = req.body;
    const passwordHash = hash(password);

    AccountTable.getAccount({ username })
        .then(({ account }) => {
            if (!account) {     // If the username does not exist.
                return AccountTable.storeAccount({ username, passwordHash })
            } else {    // If the username already exists.
                const error = new Error('This username has already been taken');

                error.statusCode = 409;

                throw error;
            }
        })
        .then(() => {
            return setSession({ username, res });
        })
        .then(({ message }) => {
            res.json({ message });
        })
        .catch(error => next(error));
});

router.post('/login', (req, res, next) => {
    const { username, password } = req.body;

    AccountTable.getAccount({ username: username })
        .then(({ account }) => {
            if (account && account.passwordHash === hash(password)) {
                const { sessionId } = account;

                return setSession({ username, res, sessionId })
            } else {
                const error = new Error('Incorrect username/password');

                error.statusCode = 409;

                throw error;
            }
        })
        .then(({ message }) => res.json({ message }))
        .catch(error => next(error));
});

router.get('/logout', (req, res, next) => {
    const { username } = Session.parse(req.cookies.sessionString);

    AccountTable.updateSessionId({
        sessionId: null,
        username: username
    })
    .then(() => {
        res.clearCookie('sessionString');

        res.json({ message: 'Successful logout' });
    })
    .catch(error => next(error));
});

router.get('/authenticated', (req, res, next) => {
    const { sessionString } = req.cookies;

    authenticatedAccount({ sessionString })
        .then(({ authenticated }) => res.json({ authenticated }))
        .catch(error => next(error))
});

module.exports = router;