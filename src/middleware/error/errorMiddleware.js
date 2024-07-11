const errorMiddleware = (err, req, res, next) => {
    return res.status(err.statusCode || 500).json({error: err.message || 'maaf server error'});
}

export default errorMiddleware;