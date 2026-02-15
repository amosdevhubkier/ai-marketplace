const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// Servir les fichiers du dossier public
app.use(express.static(path.join(__dirname, "public")));

// Route principale
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Serveur fonctionnant sur le port ${PORT}`);
});
