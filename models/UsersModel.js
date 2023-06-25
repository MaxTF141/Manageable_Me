const sql = require("./db.js");

// ==========USERS==========
const Users = function(user) {
    this.UserName = user.UserName;
    this.UserEmail = user.UserEmail;
    this.UserPassword = user.UserPassword;
};


Users.create = (user, result) => {
  sql.query("INSERT INTO Users(UserName, UserEmail, UserPassword, CreatedAt, UpdatedAt) VALUES(?, ?, ?, current_date(), current_date())", [user.UserName, user.UserEmail, user.UserPassword], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
      result(null,res)
    } 
  });
};

Users.login = (user , result) => {
  sql.query('SELECT UserName, UserEmail, UserPassword, CreatedAt, UpdatedAt FROM Users WHERE UserEmail = ?', [user.UserEmail], async (err, res) => {
    if(err) {
      console.log('error:', err)
      result(err, null)
      return;
    } else {
      result(null, res)
    }
  })
}

Users.findById = (id, result) => {
  sql.query(`SELECT * FROM Users WHERE UserID = ?`, [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found user: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Users with the id
    result({ kind: "not_found" }, null);
  });
};

Users.getAll = (result) => {
  sql.query('SELECT * FROM Users', (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
        console.log("Users: ", res);
        result(null, res);
    };
  });
};

Users.updateById = (id, user, result) => {
    sql.query('UPDATE Users SET UserName = ?, UserEmail = ?, UserPassword = ?, UpdatedAt = current_date() WHERE UserID = ? ', [user.UserName, user.UserEmail, user.UserPassword, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Users with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};

Users.remove = (id, result) => {
  sql.query("DELETE FROM Users WHERE UserID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Deleted user with id: ", id);
    result(null, res);
  });
};
module.exports = Users;