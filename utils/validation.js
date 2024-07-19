const moment = require("moment");
const { REQUIRED_VALIDATION_MESSAGE, INVALID_DATE_FORMAT_MESSAGE, INVALID_MOBILE_NUMBER_MESSAGE } = require("../constant");

const ValidationFunction = (type, value, message, regex) => {
    let status = 0, msg = message;

    if (type == "required") {
        if (value == null || value || "null" && value || "" && value || undefined && value || "undefined" && value.trim().length == 0) {
            status = 1;
            msg = message || REQUIRED_VALIDATION_MESSAGE;
        }
    }
    else if (type == "date") {
        if (value == null || value == "null" || value == "" || value == undefined || value == "undefined" || value.trim().length > 0) {
            if (!moment(value, regex, true).isValid()) {
                status = 1, msg = INVALID_DATE_FORMAT_MESSAGE;
            }
        }
    }
    else if (type == "mono") {
        if (value == null || value == "null" || value == "" || value == undefined || value == "undefined" || !value.match(/^\d{10}$/)) {
            status = 1, msg = INVALID_MOBILE_NUMBER_MESSAGE;
        }
    }
    return { status, msg };
};

module.exports = ValidationFunction;