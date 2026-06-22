const jwt = require("jsonwebtoken");
const pool = require("../config/database");
async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Os campos de email e senha são obrigatórios !" });
    }

    const result = await pool.query(
      "SELECT email, senha from cliente  WHERE email = $1",
      [email],
    );

    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ message: "Usuário inválido" });
    }

    if (password !== user.senha) {
      return res.status(401).json({ message: "Senha inválida" });
    }

    const payload = { email };
    const secret = process.env.CHAVE_JWT;
    const token = jwt.sign(payload, password, { expiresIn: "30min" });

    res.status(200).json({ token });
  } catch (erro) {
    res.status(500).json({
      message: "Não foi possível logar",
      erro: erro.message,
    });
  }
}

module.exports = { login };
