// const ErrorHandler = require("../../utils/errorHandler");
// const jwt = require("jsonwebtoken");
// const Use = require("../models/User");

// exports.isAuthenticatedUser = async (req, res, next) => {
//   const { token } = req.cookies;

//   if (!token) {
//     return next(new ErrorHandler("please login to access this resource", 401));
//   }

//   const decodeData = jwt.verify(token, process.env.JWT_SECRET);

//   req.user = await User.findById(decodeData.id);
//   next();
// };
