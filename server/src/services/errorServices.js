const errorServices = {}

// Errors that are meant to be caught by the frontEnd

errorServices.notFound = (resource) => {
throw {    
    httpStatus: 404,
    code: "RESOURCE_NOT_FOUND", 
    message: `The resource '${resource}' does not exist`,
}}

export default errorServices;