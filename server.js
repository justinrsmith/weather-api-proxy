const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.get("/", async (req, res) => {
  const queryStr = req.originalUrl.split("?")[1];
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?${queryStr}&appid=${process.env.APP_ID}`
  );
  const respJson = await response.json();
  respJson.cod = Number(respJson.cod);
  res.json(respJson);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
