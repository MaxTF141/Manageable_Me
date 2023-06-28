const User = require("../models/UsersModel.js");

const { hash, compare, hashSync } = require('bcrypt');

const { createToken } = require('../middleware/AuthenticatedUser');

// Create and Save a new User
exports.create = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    UserName: req.body.UserName,
    UserEmail: req.body.UserEmail,
    UserPassword: req.body.UserPassword
  });

  user.UserPassword = await hash(user.UserPassword, 15);

  // Save User in the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else {
      const jwt = createToken(user);
      res.cookie('_token', jwt, {
        maxAge: 3600000000,
        httpOnly: true,
        path: '/',
        sameSite: 'none',
        secure: true
      });
      res.status(200).json({ message: "A user record was saved." })
    }
  });
};

const cookie = require('cookie');

exports.loginUser = async (req, res) => {
  User.login(req.body, async (err, data) => {
    const { UserEmail, UserPassword } = req.body;
    if (err) throw err;
    if ((!data.length) || (data == null)) {
      res.status(401).json({
        err: "You provided a wrong email address"
      });
    } else {
      compare(UserPassword, data[0].UserPassword, (error, passwordMatch) => {
        if (error) throw error;

        // Create a token
        const jwt = createToken({ UserEmail, UserPassword });

        // Save the token as a cookie
        res.cookie('_token', jwt, {
          maxAge: 360000000,
          httpOnly: true,
          path: '/',
          sameSite: 'none',
          secure: false
        });

        // Retrieve the cookie value from Set-Cookie header
        const setCookieHeader = res.get('Set-Cookie');
        if (setCookieHeader && setCookieHeader.length > 0) {
          const parsedCookie = cookie.parse(setCookieHeader[0]);
          const cookieValue = parsedCookie._token;
          if (cookieValue) {
            console.log(cookieValue);
          } else {
            console.log('Cookie value is empty');
          }
        } else {
          console.log('Set-Cookie header not found');
        }

        if (passwordMatch) {
          const userData = data[0];
          res.status(200).json({
            message: 'Logged in',
            jwt,
            result: userData,
          });
        } else {
          res.status(401).json({
            err: 'You entered an invalid password or did not register.'
          });
        }
      });
    }
  });
};



// Retrieve all User from the database (with condition).
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the Users."
      });
    else res.send(data);
  });
};

// Find a single User with a id
exports.findOne = (req, res) => {
  User.findById(req.params.user, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.user}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.user
        });
      }
    } else res.send(data);
  });
};

// Update a User identified by the id in the request
exports.update = (req, res) => {
  let data = req.body;
  // Validate Request
  if (data.UserPassword !== null || data.UserPassword !== undefined) {
    data.UserPassword = hashSync(data.UserPassword, 15);
  } console.log(req.body);

  User.updateById(req.params.user, new User(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with userId ${req.params.user}.`
        });
      } else {
        res.status(500).send({
          message: "Error updating User with userId " + req.params.user
        });
      }
    } else {
      res.send(data);
      console.log(`Update user with userId ${req.params.user}`)
    }
  }
  );
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  User.remove(req.params.user, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with userId ${req.params.user}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with userId " + req.params.user
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });

};