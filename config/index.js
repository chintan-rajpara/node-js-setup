require("dotenv").config({ path: `.env.${process.env.NODE_ENV || "local"}` });

module.exports = {
    PORT,
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    DATABASE_HOST
} = process.env;