const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Base de données temporaire en mémoire
let businesses = [
  { id: 1, name: "Auto Garage Pro", sector: "Automobile", active: false },
  { id: 2, name: "City Restaurant", sector: "Food", active: true }
];

let messages = [];

app.get("/api/businesses", (req, res) => {
  res.json(businesses);
});

app.post("/api/message", (req, res) => {
  const { businessId, content } = req.body;
  const business = businesses.find(b => b.id == businessId);

  let reply;

  if (!business.active) {
    reply = `Bonjour 👋 Merci de contacter ${business.name}. 
Nous avons bien reçu votre message : "${content}".
Notre équipe vous répondra dès que possible.`;
  } else {
    reply = "L'entreprise est active et vous répondra bientôt.";
  }

  messages.push({ businessId, content, reply });

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
