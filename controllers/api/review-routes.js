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
  
// new review POST
router.post('/:id', async (req, res) => {
  try {
      const newReview = await Reviews.create({
          body: req.body.commentInput,
          user_id: req.session.userId,
          attraction_id: req.params.id,
      });
      console.log(req.body);
      res.status(200).json(newReview);
  } catch (err) {
      res.status(500).json(err);
  }
});


module.exports = router;