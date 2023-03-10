const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../../models');
// * /api/reviews

// edit review
router.put('/:id', (req, res) => {
    Reviews.update(req.body, {
        where: {
            id: req.params.id
        },
    })
    .then(review => res.json({ msg: "updated review" }))
    .catch(err =>
        res.status(400).json({ error: "unable to update" }))

});

// delete a review


module.exports = router;