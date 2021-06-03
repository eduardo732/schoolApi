module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: "postgres",
        password: "mysecretpassword",
        database: "school_dev",
        host: "172.18.0.2",
        dialect: "postgres"
    },
}
//docker inspect CONTAINER_ID  | grep IPAddress.