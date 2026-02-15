const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Serveur fonctionnant sur le port ${PORT}`);
});
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 10000;

// dossier public
app.use(express.static(path.join(__dirname, "public")));

// 👉 ajouter ceci
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Serveur fonctionnant sur le port ${PORT}`);
});
