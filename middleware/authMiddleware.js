import JWT from 'jsonwebtoken';

// Protected Routes token base
// requested next validation and response will be sent

export const requireSignIn = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res.status(401).send({
                success: false,
                message: 'Access denied. No token provided.',
            });
        }

        const decode = JWT.verify(token, process.env.JWT_SECRET);
        req.user = decode; // Attach the decoded token to the request object
        next(); // Call next to pass control to the next middleware or route handler
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            success: false,
            message: 'Invalid token',
        });
    }
};
