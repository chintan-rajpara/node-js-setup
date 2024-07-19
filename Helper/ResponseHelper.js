let success_code = 1,
    error_code = 0;

let Ok = (res, data, description) => {
    return res.status(200).json({
        status: success_code,
        msg: description ? description : "",
        data: data ? data : "",
    });
};

let BadRequest = (res, data, description) => {
    return res.status(400).json({
        status: error_code,
        msg: description ? description : "",
        data: [],
    });
};

let Error = (res, data, description) => {
    return res.status(500).json({
        status: error_code,
        msg: description ? description : "",
        data: [],
    });
};

let ServiceToController = (status, data, description) => {
    return {
        status,
        data,
        description,
    };
};

let InternalServerError = (res, description) => {
    return res.status(500).json({ status: 0, msg: description });
};

module.exports = { Ok, BadRequest, Error, ServiceToController, InternalServerError, };
