const jwt = require("jsonwebtoken");
const SECRET = "SECRTE";

const authenticateJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ msg: "Authorization Failed" });
  const token = authHeader.split(" ")[1];
  jwt.verify(token, SECRET, (err, user) => {
    if (err)
      return res.status(403).json({ msg: "Authorization Token Invalid" });
    req.user = user;
    next();
  });
};

module.exports = { authenticateJwt, SECRET };
