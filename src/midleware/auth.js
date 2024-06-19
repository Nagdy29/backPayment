import jwt, { decode } from "jsonwebtoken";

const auth = (req, res, next) => {
  const token = req.header("token");
  jwt.verify(token, "mohamednagdy", (err, decoded) => {
    if (err) return res.json({ err });
    req.userId = decoded.user_id;
    next();
  });
};

export { auth };
