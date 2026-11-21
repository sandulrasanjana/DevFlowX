function getDeploymentStatus() {
    return {
        project: "DevFlowX",
        status: "running",
        message: "Deployment successful!",
        environment: "development"
    };
}

module.exports = { getDeploymentStatus };
