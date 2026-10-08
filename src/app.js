const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const app = express();

const { expressMiddleware } = require("@as-integrations/express5");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

app.use(cors());
app.use(express.json());
console.log("Port dari .env:", process.env.PORT);

app.get("/", (req, res) => {
    res.json({
        message: "API Mahasiswa berjalan Dan Sukses",
        port: process.env.PORT
    });
});

const server = new ApolloServer({
    typeDefs,
    resolvers
});

async function startGraphQl() {
    await server.start();
    app.use(
        "/graphql",
        expressMiddleware(server)
    );
}

startGraphQl();
module.exports = app;