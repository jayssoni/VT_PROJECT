import jwt from 'jsonwebtoken';

const isAuth = (req, res, next) => {
  try{
    let {token} = req.cookies;
    if(!token){
      return res.status(401).json({message: "Unauthorized"});
    }
    let verifyToken = jwt.verify(token, process.env.JWT_SECRET)
    if(!verifyToken){
      return res.status(401).json({message: "Unauthorized"});
    }
    req.userId= verifyToken.id;
    next();
  }
  catch (error) {
    console.error('Error in isAuth middleware:', error);
    return res.status(500).json({message: "Internal Server Error"});
  }
}

export default isAuth;
