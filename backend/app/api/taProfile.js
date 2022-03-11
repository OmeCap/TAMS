const { Router } = require('express');
const TaProfileTable = require('../taProfile/table');


const router = new Router();

router.post('/profile', (req, res, next) => {
    const { email, upi, homeAddress, currentYear, roleType, feeStatus } = req.body;

    TaProfileTable.getProfile({ email })
        .then(({ profile }) => {
            if (!profile) {
                return TaProfileTable.storeProfile({
                    email, upi, homeAddress, currentYear, roleType, feeStatus
                })
            } else {
                const error = new Error('The profile of the user is exist.');

                error.statusCode = 409;

                throw error;
            }
        })
        .then(() => {
            res.json({ message: 'Profile stored' });
        })
        .catch(error => next(error));
    
});


module.exports = router;