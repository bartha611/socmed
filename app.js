const express = require("express");

const app = express();
const PORT = 8080;

app.use(express.static(`${__dirname}/dist`));

app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}`);
});
