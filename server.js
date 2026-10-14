const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>My Containerized Web Application</h1>
    <p>Node.js deployment using GitHub Actions and AWS EC2.</p>
    <p>Status: Application is running!</p>
  `);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    application: "containerized-web-app"
  });
});

if (require.main === module) {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Application running on port ${port}`);
  });
}

module.exports = app;