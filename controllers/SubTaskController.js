const Subtasks = require("../models/SubTasksModal");

// Create and Save a new Task
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Add a subtask
    const subtask = new Subtasks({
        SubDescription: req.body.SubDescription,
    });

    // Save Task in the database
    Subtasks.create(req.params.task, subtask, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Task."
            });
        else res.send(data);
    });
};

// Retrieve all Tasks from the database (with condition).
exports.findAll = (req, res) => {
    const taskID = req.params.task;
    Subtasks.getAll(taskID, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving task."
            });
        else res.send(data);
    });
};

// Find a single Task with a id
exports.findOne = (req, res) => {
    Subtasks.findById(req.params.sub , (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Subtask with id ${req.params.sub}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Subtask with id " + req.params.sub
                });
            }
        } else res.send(data);
    });
};

// Update a Task identified by the id in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    console.log(req.body);

    Subtasks.updateById(req.params.sub, new Subtasks(req.body),(err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Subtask with id ${req.params.sub}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Task with id " + req.params.sub
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
    Subtasks.remove(req.params.sub, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Task with id ${req.params.sub}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Task with id " + req.params.sub
                });
            }
        } else res.send({ message: `Task was deleted successfully!` });
    });

};