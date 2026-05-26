require("dotenv").config();
const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const secret = process.env.CHAVE_JWT;
    const payload = jwt.verify(token, secret);
    req.user = payload;
    next();
  } catch (erro) {
    return res.status(401).json({ message: "Token inválido ou expirado " });
  }
}

module.exports = { verificarToken };
