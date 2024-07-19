// logger.js
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;
const DailyRotateFile = require("winston-daily-rotate-file");

// Custom log format
const customFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
    level: "info",
    format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
        customFormat
    ),
    transports: [
        new transports.Console(), // Logs to the console
        new DailyRotateFile({
            filename: "logs/error/%DATE%.log",
            datePattern: "YYYY-MM-DD",
            level: "error",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "30"
        }), // Logs errors to a daily rotating file
        new DailyRotateFile({
            filename: "logs/info/%DATE%.log",
            datePattern: "YYYY-MM-DD",
            zippedArchive: true,
            maxSize: "20m",
            maxFiles: "30"
        }) // Logs all messages to a daily rotating file
    ]
});

module.exports = logger;
