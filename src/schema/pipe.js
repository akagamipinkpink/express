import ResponseError from "../middleware/error/responseError.js";

const Pipe = (schema, request) => {
    const {error,value} = schema.validate(request);
    if (error) {
        throw new ResponseError(400, 'Validation gagal.');
    }
    return value;
}

export default Pipe;