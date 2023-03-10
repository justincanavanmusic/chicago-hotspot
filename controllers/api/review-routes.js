const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../../models');
// * /api/reviews


router.delete('/:id', async (req, res) => {
    try {
      const reviewData = await Reviews.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!reviewData) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(reviewData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
// delete a review


module.exports = router;