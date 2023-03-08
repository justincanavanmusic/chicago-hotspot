const router = require('express').Router();
const Users = require('../../models/Users');

router.post('/login', async (req, res) => {
    try {
      const userLoginData = await Users.findOne({
        where: {
          username: req.body.username,
        },
      });
  
      if (!userLoginData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      const userPassword = await userLoginData.checkPassword(req.body.password);
  
      if (!userPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password. Please try again!' });
        return;
      }
  
      req.session.save(() => {
        req.session.loggedIn = true;
        res
          .status(200)
          .json({ user: userLoginData, message: 'You are now logged in!' });
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
    router.post('/signup', async (req, res) => {
      try {
        const userSignUpData = await Users.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
        });
    
        req.session.save(() => {
       req.session.user_id = userSignUpData.id
          req.session.loggedIn = true;
    
          res.status(200).json(userSignUpData);
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });
  
    router.post('/logout', (req, res) => {
      // When the user logs out, the session is destroyed
      if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      } else {
        res.status(404).end();
      }
    });

    module.exports = router;