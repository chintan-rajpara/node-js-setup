const Sequelize = require("sequelize");
const sequelize = require("../database");

module.exports = {
    sequelize: sequelize,
    Op: Sequelize.Op,
    QueryTypes: Sequelize.QueryTypes
};