const router = require('express').Router();
const { Attractions, Users, Reviews } = require('../../models/');
const withAuth = require('../utils/auth');
// */api/users

// login post route, sets up session and validates login data
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
      req.session.userId = userLoginData.id;
      req.session.username = userLoginData.username
      req.session.loggedIn = true;
      console.log(req.session);
      res
        .status(200)
        .json({ user: userLoginData, message: 'You are now logged in!' });
        
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// sign up post route, creates new user and sets up session
router.post('/', async (req, res) => {
  try {
    const userSignUpData = await Users.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = userSignUpData.id;
      req.session.username = userSignUpData.username;
      req.session.loggedIn = true;
      console.log("success")
      res.status(200).json(userSignUpData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// logout post route, when the user logs out, the session is destroyed
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;