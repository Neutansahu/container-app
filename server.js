
const express = require("express");

const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#071735">
  <title>CloudDevOps | Automated Deployment</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: Arial, Helvetica, sans-serif;
      background: #f3f7ff;
      color: #10234d;
      line-height: 1.6;
    }

    a { text-decoration: none; }

    header {
      background: #071735;
      color: white;
      padding: 18px 7%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
      border-bottom: 1px solid #263d69;
    }

    .logo { font-size: 25px; font-weight: bold; }
    .logo span { color: #24c8ff; }

    nav { display: flex; gap: 22px; flex-wrap: wrap; }
    nav a { color: #dce8ff; font-size: 14px; }
    nav a:hover { color: #39e0c0; }

    .status { font-size: 13px; color: #b7ffcf; }

    .hero {
      color: white;
      padding: 65px 7%;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      align-items: center;
      gap: 40px;
      background:
        radial-gradient(ellipse at 85% 20%, #392b8b 0, transparent 35%),
        linear-gradient(120deg, #06152f, #102c70 65%, #201b59);
    }

    .tag {
      display: inline-block;
      border: 1px solid #5278b9;
      background: #17356a;
      padding: 7px 14px;
      border-radius: 25px;
      font-size: 13px;
      margin-bottom: 22px;
    }

    h1 { font-size: clamp(32px, 4vw, 51px); line-height: 1.15; }
    .highlight { color: #27e0ad; }

    .hero p {
      margin-top: 20px;
      color: #d5e2ff;
      font-size: 17px;
      max-width: 620px;
    }

    .actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 28px; }

    .btn {
      display: inline-block;
      padding: 12px 19px;
      border-radius: 10px;
      font-weight: bold;
      font-size: 14px;
    }

    .btn-primary { background: #18c98c; color: #062d32; }
    .btn-secondary { border: 1px solid #8dbdff; color: white; }
    .btn:hover { transform: translateY(-2px); }

    .illustration {
      min-height: 260px;
      border: 1px solid #4165b5;
      border-radius: 28px;
      padding: 25px;
      background: linear-gradient(145deg, #123c85, #101e4a);
      box-shadow: 0 20px 65px #020b2780;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

    .cloud { font-size: 76px; filter: drop-shadow(0 0 18px #20a8ff); }
    .screen {
      margin-top: 8px;
      width: 85%;
      padding: 15px;
      background: #06152f;
      border: 2px solid #3d9bff;
      border-radius: 12px;
      color: #53e8ff;
      font-family: monospace;
      font-size: 14px;
    }

    section { padding: 48px 7%; }
    .section-heading { text-align: center; margin-bottom: 30px; }
    .section-heading h2 { font-size: 28px; }
    .section-heading p { color: #637493; margin-top: 6px; }

    .pipeline {
      display: grid;
      grid-template-columns: repeat(6, minmax(100px, 1fr));
      gap: 14px;
      text-align: center;
    }

    .stage {
      background: white;
      padding: 20px 8px;
      border: 1px solid #d9e5ff;
      border-radius: 16px;
      box-shadow: 0 5px 18px #1d3b6810;
    }

    .stage-icon { font-size: 34px; margin-bottom: 8px; }
    .stage h3 { font-size: 14px; }
    .stage p { color: #71809e; font-size: 12px; margin-top: 4px; }

    .features {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 18px;
    }

    .card {
      background: white;
      border: 1px solid #dbe6f8;
      padding: 24px;
      border-radius: 18px;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 30px #1d3b6815;
    }

    .card-icon { font-size: 35px; }
    .card h3 { margin: 12px 0 8px; font-size: 18px; }
    .card p { color: #64738e; font-size: 14px; }

    .pill {
      display: inline-block;
      background: #e6f1ff;
      color: #1553a7;
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 12px;
      margin-top: 16px;
    }

    .about {
      background: linear-gradient(120deg, #e3f3ff, #f0edff);
      border: 1px solid #d7e3ff;
      border-radius: 22px;
      text-align: center;
      max-width: 900px;
      margin: 0 auto;
      padding: 30px;
    }

    .about p { color: #536582; margin-top: 10px; }

    footer {
      background: #071735;
      color: #cbd8f3;
      padding: 24px 7%;
      text-align: center;
      font-size: 13px;
    }

    footer strong { color: #43dfb0; }

    @media (max-width: 950px) {
      .hero { grid-template-columns: 1fr; }
      .pipeline { grid-template-columns: repeat(3, 1fr); }
      .features { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 560px) {
      header { padding: 18px 5%; }
      nav { gap: 12px; }
      .hero { padding: 42px 5%; }
      section { padding: 35px 5%; }
      .pipeline { grid-template-columns: repeat(2, 1fr); }
      .features { grid-template-columns: 1fr; }
      .illustration { min-height: 220px; }
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">☁ Cloud<span>DevOps</span></div>
    <nav>
      <a href="#home">Home</a>
      <a href="#pipeline">Pipeline</a>
      <a href="#features">Features</a>
      <a href="/health">Health Check</a>
    </nav>
    <div class="status">● Application Online · Port 8000</div>
  </header>

  <main>
    <section class="hero" id="home">
      <div>
        <div class="tag">⚙ Node.js &nbsp; + &nbsp; Docker &nbsp; + &nbsp; AWS</div>
        <h1>Automated CI/CD Pipeline for a Containerized <span class="highlight">Node.js</span> Web Application</h1>
        <p>
          My Containerized Web Application demonstrates a modern DevOps workflow
          using GitHub Actions, Docker, Amazon ECR, AWS EC2, and Systems Manager.
          Deploy your application with automation and secure access.
        </p>
        <div class="actions">
          <a class="btn btn-primary" href="#pipeline">🚀 Explore Pipeline</a>
          <a class="btn btn-secondary" href="#features">View Technologies →</a>
        </div>
      </div>

      <div class="illustration" aria-label="Cloud deployment illustration">
        <div class="cloud">☁️</div>
        <h2>Code to Cloud</h2>
        <div class="screen">
          &gt; docker build .<br>
          &gt; pushing image to ECR<br>
          &gt; deploying to AWS EC2<br>
          <span style="color:#27e0ad">✓ Ready for deployment</span>
        </div>
        <p>Build · Test · Deploy</p>
      </div>
    </section>

    <section id="pipeline">
      <div class="section-heading">
        <h2>⚡ CI/CD Pipeline</h2>
        <p>From source code to a running application</p>
      </div>

      <div class="pipeline">
        <div class="stage">
          <div class="stage-icon">🐙</div>
          <h3>GitHub</h3>
          <p>Source Code</p>
        </div>
        <div class="stage">
          <div class="stage-icon">🔄</div>
          <h3>GitHub Actions</h3>
          <p>Build & Test</p>
        </div>
        <div class="stage">
          <div class="stage-icon">🐳</div>
          <h3>Docker</h3>
          <p>Build Image</p>
        </div>
        <div class="stage">
          <div class="stage-icon">📦</div>
          <h3>Amazon ECR</h3>
          <p>Store Image</p>
        </div>
        <div class="stage">
          <div class="stage-icon">🔐</div>
          <h3>AWS SSM</h3>
          <p>Secure Deploy</p>
        </div>
        <div class="stage">
          <div class="stage-icon">☁️</div>
          <h3>Amazon EC2</h3>
          <p>Run Application</p>
        </div>
      </div>
    </section>

    <section id="features">
      <div class="section-heading">
        <h2>Key Features</h2>
        <p>Technologies powering this cloud deployment project</p>
      </div>

      <div class="features">
        <article class="card">
          <div class="card-icon">🐳</div>
          <h3>Containerized App</h3>
          <p>Docker packages the Node.js application for consistent deployments.</p>
          <span class="pill">Docker</span>
        </article>

        <article class="card">
          <div class="card-icon">⚙️</div>
          <h3>Automated CI/CD</h3>
          <p>GitHub Actions runs tests, builds the image, and deploys new versions.</p>
          <span class="pill">GitHub Actions</span>
        </article>

        <article class="card">
          <div class="card-icon">🛡️</div>
          <h3>Secure Deployment</h3>
          <p>GitHub OIDC and Systems Manager reduce the need for long-lived keys and inbound SSH.</p>
          <span class="pill">IAM + SSM</span>
        </article>

        <article class="card">
          <div class="card-icon">☁️</div>
          <h3>Cloud Hosting</h3>
          <p>Amazon EC2 runs the container while ECR stores private Docker images.</p>
          <span class="pill">AWS Cloud</span>
        </article>
      </div>
    </section>

    <section>
      <div class="about">
        <h2>🎯 About This Project</h2>
        <p>
          This project demonstrates how developers can automate application
          delivery with CI/CD, containerization, cloud infrastructure, and
          secure AWS deployment practices.
        </p>
        <p><strong>Application port: 8000</strong></p>
      </div>
    </section>
  </main>

  <footer>
    <p>☁ CloudDevOps · Node.js · Docker · GitHub Actions · AWS</p>
    <p style="margin-top:8px">Project demonstration · <strong>Designed for automated cloud deployment</strong></p>
  </footer>
</body>
</html>`);
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    application: "containerized-web-app",
    port: Number(port)
  });
});

if (require.main === module) {
  app.listen(port, "0.0.0.0", () => {
    console.log(`Application running on port ${port}`);
  });
}

module.exports = app;
