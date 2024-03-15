export const validateSchemaUtil = async (schema, body) => {
    try {
      await schema.validateAsync(body);
    } catch (error) {
      error.httpStatus = 400; // Bad Request
      error.code = 'ERROR_VALIDATE_SCHEMA';
      error.message = schema
      throw error;
    }
  };
