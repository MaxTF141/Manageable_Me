// ========= SubTasks ==========
const sql = require('./db.js');

const Subtasks = function(subtask) {
    this.subDescription = subtask.subDescription;
    this.TaskID = subtask.TaskID
};

Subtasks.create = (subtask, result) => {
    sql.query("INSERT INTO Subtask (TaskID, SubDescription) VALUES(?, ?)", [subtask.TaskID, subtask.subDescription], (err, res)=>{
        if(err) {
            console.log('error:' , err);
            result(err, null);
            return;
        } else{
            console.log('Added a subtask: ', {id: res.insertId, ...subtask});
            result(null, res);
        }
    })
};

Subtasks.findById = (id, result) => {
    sql.query('SELECT * FROM SubTask WHERE subtaskID = ? AND TaskID = ?', [id], (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(err, null);
        }
        if(res.length) {
            console.log('found task: ', res[0]);
            result(null, res[0]);
            return;
        } else {
            console.log('Task not found');
            result({kind: 'not_found'}, null);
        }
    })
};

Subtasks.getAll = (taskID, result) => {
    sql.query('SELECT * FROM Subtask WHERE TaskID = ?', [taskID], (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(err, null);
            return;
        } else {
            console.log('Tasks: ', res);
            result(null, res);
        }
    })
};

Subtasks.updateById = (id, subtask, result) => {
    sql.query('UPDATE Subtask SET subDescription = ? WHERE SubtaskID = ?', [subtask.subDescription, id], (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(err, null);
        }
        if(res.affectedRows == 0) {
            result({kind: 'not_found'}, null);
            return;
        }
        console.log('update subtask: ', {id: id, ...subtask});
        result(null, {id: id, ...subtask});
    })
}

Subtasks.remove = (id, result) => {
    sql.query('DELETE FROM Subtask WHERE SubtaskID = ?', [id], (err, res) => {
        if(err) {
            console.log('error: ', err);
            result(err, null);
            return;
        }

        if (res.affectedRows == 0) {
            result({kind: 'not_found'}, null);
            return;
        }
        console.log('subtask with id: ', id, 'removed');
        result(null, res);
    })
}

module.exports = Subtasks;

