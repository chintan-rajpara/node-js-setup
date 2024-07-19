const { PORT, NODE_ENV } = require("./config/index");
const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

// logger
const logger = require("./utils/logger");

// database 
const database = require("./database");
database.sync();

// body-parser
app.use(bodyParser.json({
    limit: "1024mb",
    strict: true
}));
app.use(bodyParser.urlencoded({ extended: true }));

// express-fileupload
app.use(fileUpload());

app.listen(PORT, (err) => {
    if (err) {
        logger.error("Server not responding");
    } else {
        logger.info(`====================================================`);
        logger.info(`====================================================`);
        logger.info(`================= 🚀 ENV: ${NODE_ENV} 🚀 =================`);
        logger.info(`======== 🚀 Server running on port: ${PORT} 🚀 ========`);
        logger.info(`====================================================`);
        logger.info(`====================================================`);
    }
});