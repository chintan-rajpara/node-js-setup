const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    dialect: "mysql",
    query: {
        raw: true,
    },
    logging: false
});

module.exports = sequelize;