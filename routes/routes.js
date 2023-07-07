const { requireAuth } = require('../middleware/RequireAuth.js');
const { verifyAToken, createToken } = require('../middleware/AuthenticatedUser.js');

module.exports = app => {
    var router = require("express").Router();

    // users routes
    const user = require("../controllers/UsersController.js");
    router.post("/register", user.create);

    router.post('/login', user.loginUser)
    
    router.get("/users", user.findAll);

    router.get("/users/:user", user.findOne);
    
    router.put("/users/:user", user.update);
    
    router.delete("/users/:user", user.delete);

    // // logout 
    // router.post('/logout', verifyAToken, user.signOut);
  
    // // items routes
    // const restaurant = require('../controllers/RestaurantsController.js');
    // router.post("/items", restaurant.create);
  
    // router.get("/items", restaurant.findAll);

    // router.get("/items/:id", verifyAToken, requireAuth, restaurant.findOne);
  
    // router.put("/items/:id", restaurant.update);
  
    // router.delete("/items/:id", restaurant.delete);
    
    // Tasks  routes
    const tasks = require('../controllers/TasksController.js');
    router.post("/user/:user/tasks", tasks.create);
  
    router.get("/user/:user/tasks", tasks.findAll);

    router.get("/user/:user/tasks/:task", tasks.findOne);
  
    router.put("/user/:user/tasks/:task", tasks.update);
  
    router.delete("/user/:user/tasks/:task", tasks.delete);

    
    // Subtasks routes
    const subtasks = require('../controllers/SubTaskController.js');
    router.post("/user/:user/tasks/:task/sub", verifyAToken, requireAuth, subtasks.create);
  
    router.get("/user/:user/tasks/:task/sub", subtasks.findAll);

    router.get("/user/:user/tasks/:task/sub/:sub", subtasks.findOne);
  
    router.put("/user/:user/tasks/:task/sub/:sub", verifyAToken, requireAuth, subtasks.update);
  
    router.delete("/user/:user/tasks/:task/sub/:sub", verifyAToken, requireAuth, subtasks.delete);

    app.use('/', router);
  };