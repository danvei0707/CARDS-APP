import errorServices from "../services/errorServices.js";

const errorsControllers = {}

errorsControllers.handler = (error, req, res, next) => {
    res.status(error.httpStatus || 500).send({
        status: 'error',
        code: error.code || 'INTERNAL_SERVER_ERROR',
        message: error.message,
      });
    
};


errorsControllers.notFound = (req, res, next) => {
    const resourcePath = req.originalUrl;
    console.log(`Resource not found: ${resourcePath}`);
    
    next(errorServices.notFound(resourcePath))
}

export default errorsControllers