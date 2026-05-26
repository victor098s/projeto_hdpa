const jwt = require("jsonwebtoken");

const AUTH_USER = process.env.AUTH_USER;
const AUTH_PASSWORD = process.env.AUTH_PASSOWRD;

function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Os campos de email e senha são obrigatórios !" });
  }

  if (email !== AUTH_USER || password !== AUTH_PASSWORD) {
    return res.status(401).json({ message: "Credenciais inválidas" });
  }

  const payload = { email };
  const secret = process.env.CHAVE_JWT;
  const token = jwt.sign(payload, secret, { expiresIn: "2h" });

  res.status(200).json({ token });
}

module.exports = { login };
