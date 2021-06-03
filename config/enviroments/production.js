module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: "postgres",
        password: "mysecretpassword",
        database: "school_prod",
        host: "localhost",
        dialect: "postgres"
    },
}