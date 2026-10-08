const jenisKelaminSchema = require("./jenis_kelamin/schema");
const programStudiSchema = require("./program_studi/schema");
const angkatanSchema = require("./angkatan/schema");
const mahasiswaSchema = require("./mahasiswa/schema");

const typeDefs = `#graphql
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }

    ${jenisKelaminSchema}
    ${programStudiSchema}
    ${angkatanSchema}
    ${mahasiswaSchema}
`;

module.exports = typeDefs;