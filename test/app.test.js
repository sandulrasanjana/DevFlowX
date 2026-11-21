const test = require("node:test");
const assert = require("node:assert");
const { getDeploymentStatus } = require("../src/app");

test("should return successful deployment status", () => {
    const result = getDeploymentStatus();

    assert.strictEqual(result.project, "DevFlowX");
    assert.strictEqual(result.status, "running");
    assert.strictEqual(result.message, "Deployment successful!");
});

test("should return development environment", () => {
    const result = getDeploymentStatus();

    assert.strictEqual(result.environment, "development");
});
