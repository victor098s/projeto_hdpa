require("dotenv").config()
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const path = require("path");
const authRoutes = require("./src/routes/authRoutes");
const porVestRoutes = require("./src/routes/por_vestRoutes");
const selectView = require("./src/routes/selectViewRoutes");

const { verificarToken } = require("./src/middleware/authMiddleware");
app.use(express.static("../frontend/public"));
app.use("/porVest", porVestRoutes, verificarToken);
app.use("/selectView", porVestRoutes, verificarToken);
app.use("/auth", authRoutes);

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/public/assets/pages/home.html"));
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${port}/`);
  console.log(
    `🚀 Rota para o select da view: http://localhost:${port}/selectView?vestibular=PUC&tema=Literatura&nomeTa=Barroco&nomeTb=Arcadismo&nomeTc=Regência`,
  );
});
