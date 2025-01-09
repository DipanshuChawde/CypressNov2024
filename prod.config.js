const { defineConfig } = require("cypress");
module.exports = defineConfig({
    e2e: {
        baseUrl: "https://practice.automationtesting.in/"
    },
    env: {
        uid: "testingProd@gmail.com",
        pw: "Chawde@123"
    }
})