const { asClass, createContainer, asFunction, asValue } = require("awilix");

const StartUp = require("./startup");
const Server = require("./server");
const Routes = require("../api/routes");

const { UserController } = require("../api/controllers");
const { UserService } = require("../services");
const { UserRepository } = require("../dal/repositories");
const UserRoutes = require("./routes/user.routes");

const config = require("../config/enviroments");
const container = createContainer();

const db = require("../dal/entities");

container
  .register({
    app: asClass(StartUp).singleton(),
    server: asClass(Server).singleton(),
  })
  .register({
    UserController: asClass(UserController).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    UserService: asClass(UserService).singleton(),
    UserRepository: asClass(UserRepository).singleton()
  })
  .register({
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    db: asValue(db)
  })


module.exports = container;
