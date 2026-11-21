# 🚀 DevFlowX – Containerized CI/CD & Release Automation Platform

A hands-on DevOps project demonstrating automated testing, Docker containerization, security scanning, and container image publishing using GitHub Actions and GitHub Container Registry (GHCR).

## 📌 Project Overview

DevFlowX is a lightweight Node.js application designed to demonstrate a practical CI/CD workflow.

Whenever code is pushed to the `main` branch, GitHub Actions automatically runs application tests, builds a Docker image, scans it for vulnerabilities using Trivy, and publishes the image to GitHub Container Registry.

The published image can then be pulled and executed as a Docker container.

## 🏗️ CI/CD Architecture

```text
        Developer
            |
            v
      GitHub Repository
            |
            v
       GitHub Actions
            |
            v
    Install Dependencies
            |
            v
     Automated Testing
            |
            v
       Docker Build
            |
            v
     Trivy Security Scan
            |
            v
      GHCR Authentication
            |
            v
      Publish Docker Image
            |
            v
   GitHub Container Registry
            |
            v
     Pull & Run Container
```

## ✨ Key Features

- **Automated CI Pipeline:** GitHub Actions automatically executes the workflow on pushes and pull requests targeting `main`.
- **Automated Testing:** Node.js built-in test runner validates application functionality.
- **Docker Containerization:** Packages the application into a portable Docker image.
- **Security Scanning:** Trivy scans container images for OS and library vulnerabilities.
- **Automated Image Publishing:** Publishes Docker images to GitHub Container Registry (GHCR).
- **Image Versioning:** Uses `latest` and Git commit SHA tags.
- **Container Deployment Verification:** Runs the published image and validates application health through API endpoints.

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Application | Node.js |
| Version Control | Git, GitHub |
| CI/CD | GitHub Actions |
| Containerization | Docker |
| Security Scanning | Trivy |
| Container Registry | GitHub Container Registry (GHCR) |
| Operating System | Linux |

## 📂 Project Structure

```text
DevFlowX/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── src/
│   ├── app.js
│   └── server.js
│
├── test/
│   └── app.test.js
│
├── .dockerignore
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ CI/CD Workflow

The GitHub Actions workflow performs the following steps:

1. Checks out the source code.
2. Sets up the Node.js environment.
3. Installs dependencies using `npm ci`.
4. Executes automated tests using `npm test`.
5. Builds the Docker image.
6. Verifies the generated Docker image.
7. Scans the image using Trivy.
8. Authenticates with GHCR using GitHub Actions `GITHUB_TOKEN`.
9. Builds and publishes the Docker image to GHCR.

The image is published only when code is pushed to the `main` branch.

## 🚀 Getting Started

### Prerequisites

- Git
- Node.js 22
- Docker

### 1. Clone the Repository

```bash
git clone https://github.com/sandulrasanjana/DevFlowX.git

cd DevFlowX
```

### 2. Install Dependencies

```bash
npm ci
```

### 3. Run Automated Tests

```bash
npm test
```

### 4. Run the Application Locally

```bash
PORT=3001 npm start
```

The application will be available at:

```text
http://localhost:3001
```

## 🐳 Docker Deployment

### 1. Build Docker Image

```bash
docker build -t devflowx:1.0 .
```

### 2. Run Docker Container

```bash
docker run -d \
  --name devflowx-app \
  -p 3001:3000 \
  devflowx:1.0
```

### 3. Verify Running Container

```bash
docker ps
```

## 📦 Pull Image from GitHub Container Registry

The published Docker image is available through GHCR.

**Pull the image:**

```bash
docker pull ghcr.io/sandulrasanjana/devflowx:latest
```

**Run the container:**

```bash
docker run -d \
  --name devflowx-ghcr \
  -p 3002:3000 \
  ghcr.io/sandulrasanjana/devflowx:latest
```

## 🔍 API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/health` | GET | Checks application health |
| `/api/status` | GET | Returns application deployment status |

### Health Check

```bash
curl http://localhost:3002/health
```

Expected response:

```json
{
  "status": "healthy"
}
```

### Application Status

```bash
curl http://localhost:3002/api/status
```

Expected response:

```json
{
  "project": "DevFlowX",
  "status": "running",
  "message": "Deployment successful!",
  "environment": "development"
}
```

## 🔐 Security Scanning

Trivy is integrated into the GitHub Actions workflow to identify vulnerabilities in:

- Operating system packages
- Application libraries

The workflow currently reports CRITICAL and HIGH severity vulnerabilities. The scan is configured with a non-blocking exit code while security findings are being evaluated.

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- Building automated CI pipelines.
- Writing and executing automated application tests.
- Containerizing Node.js applications with Docker.
- Integrating security scanning into CI workflows.
- Managing container images using GHCR.
- Automating Docker image publishing.
- Running and validating containerized applications on Linux.

## 🔮 Future Enhancements

- Kubernetes-based application deployment.
- Helm charts for deployment management.
- Infrastructure provisioning using Terraform.
- Cloud deployment using AWS.
- GitOps automation using Argo CD.
- Monitoring and observability using Prometheus and Grafana.

## 👨‍💻 Author

**Sandul Rasanjana**

Information Systems Undergraduate | Aspiring DevOps Engineer

- GitHub: https://github.com/sandulrasanjana
- Project Repository: https://github.com/sandulrasanjana/DevFlowX

---

⭐ If you find this project useful, feel free to explore the repository!
