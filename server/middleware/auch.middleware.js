import jwt from 'jsonwebtoken'
import config from 'config'

function auch (req, res, next)  {
  if (req.method === 'OPTIONS') {
    return next()
  }
  

  try {
    
    const token = req.headers.authorization.split(' ')[1]
    if (!token){
      return res.status(401).json({message: `Auth error` })
    }
    
    const decoded = jwt.verify(token, config.get('secretKey'))
    console.log(req.user);
    req.user = decoded
    console.log(req.user);
    console.log("authorization - ", req.headers.authorization);
    next()
  } catch (error) {
    
    return res.status(401).json({message: `Auth error ${error}` })
  }

}
export default auch
