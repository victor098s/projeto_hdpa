require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
const path = require("path");
const authRoutes = require("./src/routes/authRoutes");
const porVestRoutes = require("./src/routes/por_vestRoutes");
const selectView = require("./src/routes/selectViewRoutes");

const { verificarToken } = require("./src/middleware/authMiddleware");
// app.use(express.static("../frontend/hdpaMaster/src/pages/Login"));
app.use("/porVest", porVestRoutes, verificarToken);
app.use("/selectView", porVestRoutes, verificarToken);
app.use("/auth", authRoutes);

// app.get("/home", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/hdpaMaster/src/pages/Home/Home.jsx"));
// });

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em: http://localhost:${port}/`);
  console.log(
    `🚀 Rota para o select da view: http://localhost:${port}/selectView?vestibular=PUC&tema=Literatura&nomeTa=Barroco&nomeTb=Arcadismo&nomeTc=Regência`,
  );
});
