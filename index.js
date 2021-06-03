const container = require("./api/container");

const application = container.resolve("app");
const db = container.resolve("db");

application
  .start()
  .then(async () => {
    await db.sequelize.sync();
  })
  .catch((error) => {
    console.log(error);
    process.exit();
  });
