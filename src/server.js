const http = require("http");
const { getDeploymentStatus } = require("./app");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/health") {
        res.writeHead(200);
        res.end(JSON.stringify({ status: "healthy" }));
        return;
    }

    if (req.url === "/api/status") {
        res.writeHead(200);
        res.end(JSON.stringify(getDeploymentStatus()));
        return;
    }

    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
});

server.listen(PORT, () => {
    console.log(`DevFlowX API running on port ${PORT}`);
});
