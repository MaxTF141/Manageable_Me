// ==========Tasks==========
const sql = require('./db.js')

const Tasks = function(task) {
    this.TaskTitle = task.TaskTitle;
    this.TaskDescription = task.TaskDescription;
    this.DueDate = task.DueDate;
    this.CategoryID = task.CategoryID;
    this.CategoryColor = task.CategoryColor;
    this.Priority = task.Priority;
};

Tasks.create = (UserID, task, result) => {
  sql.query("INSERT INTO Tasks (UserID, TaskTitle, TaskDescription, DueDate, CreatedAt, UpdatedAt, Priority, CategoryID) VALUES(?, ?, ?, ?, current_date(), current_date(), ?, ?)", [UserID, task.TaskTitle, task.TaskDescription, task.DueDate, task.CategoryID], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created task: ", { id: res.insertId, ...task });
    result(null, res);
  });
};

Tasks.findById = (id, result) => {
  sql.query(`SELECT t.*, c.CategoryColor, c.CategoryName
  FROM Tasks t
  INNER JOIN Categories c ON t.CategoryID = c.CategoryID
  WHERE TaskID = ?;`, [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found task: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tasks with the id
    result({ kind: "not_found" }, null);
  });
};

Tasks.getAll = (id, result) => {
  sql.query(`SELECT t.*, c.CategoryColor, c.CategoryName
            FROM Tasks t
            INNER JOIN Categories c ON t.CategoryID = c.CategoryID
            WHERE UserID = ?;
  `, [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("Tasks: ", id);
    result(null, res);
  });
};

Tasks.updateById = (id, task, result) => {
    sql.query('UPDATE Tasks SET TaskTitle = ?, TaskDescription = ?, DueDate = ?, UpdatedAt = current_time(), Priority = ? WHERE TaskID = ?', [task.TaskTitle, task.TaskDescription, task.DueDate, task.Priority, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tasks with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated task: ", );
      result(null, res);
    }
  );
};

Tasks.remove = (id, result) => {
  sql.query("DELETE FROM Tasks WHERE TaskID = ?", [id], (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted task with id: ", id);
    result(null, res);
  });
};


module.exports = Tasks;