const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../../models');
// * /api/reviews

// get reviews by user
router.get('/:id', async (req, res) => {
    try {
        const review = await Reviews.findOne({
            where : {
              id: req.params.id
            },
            include: [
                Attractions, Users
            ]
        });
        const reviewData = review.dataValues;
        console.log(reviewData);
    } catch
})

module.exports = router;