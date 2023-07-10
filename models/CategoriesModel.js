const sql = require("./db.js");

// ==========CATEGORIES==========
const Category = function(category) {
    this.CategoryName = user.CategoryName;
    this.CategoryColor = user.CategoryColor;
};

Category.getAll = (result) => {
    sql.query('SELECT * FROM Categories', (err, res) => {
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

  module.exports = Category;