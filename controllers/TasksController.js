const Task = require("../models/TasksModal.js");

// Create and Save a new Task
exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Add a Task
    const task = new Task({
        UserID: req.body.UserID,
        TaskTitle: req.body.TaskTitle,
        TaskDescription: req.body.TaskDescription,
        DueDate: req.body.DueDate,
    });

    // Save Task in the database
    const id = req.params.user
    Task.create(id, task, (err, data) => {
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
    const id = req.params.user;

    Task.getAll(id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving task."
            });
        else res.send(data);
        console.log(id)
    });
};

// Find a single Task with a id
exports.findOne = (req, res) => {
    Task.findById(req.params.user, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Task with id ${req.params.user}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Task with id " + req.params.user
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

    Task.updateById(req.params.user, new Task(req.body), (err, data) => {
            if (err) {
                if (err.kind === "not_found") {
                    res.status(404).send({
                        message: `Not found Task with id ${req.params.user}.`
                    });
                } else {
                    res.status(500).send({
                        message: "Error updating Task with id " + req.params.user
                    });
                }
            } else res.send(data);
        }
    );
};

// Delete a Task with the specified id in the request
exports.delete = (req, res) => {
    Task.remove(req.params.user, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Task with id ${req.params.user}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Task with id " + req.params.user
                });
            }
        } else res.send({ message: `Task was deleted successfully!` });
    });

};