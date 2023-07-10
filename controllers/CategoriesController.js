const Category = require("../models/CategoriesModel.js");

exports.findAll = (req, res) => {
    Category.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving the Users."
        });
      else res.send(data);
    });
  };