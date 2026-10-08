const typeDefs = `#graphql

    type ProgramStudi {
        id_program_studi: ID!
        kode: String!
        nama: String!
        create_at: String
        update_at: String
        delete_at: String
    }

    input ProgramStudiInput {
        kode: String!
        nama: String!
    }

    extend type Query {
        programStudi: [ProgramStudi]
        programStudiById(id: ID!): ProgramStudi
        cariProgramStudi(keyword: String!): [ProgramStudi]
    }

    extend type Mutation {
        tambahProgramStudi(input: ProgramStudiInput!): ProgramStudi
        updateProgramStudi(
            id: ID!
            input: ProgramStudiInput!
        ): ProgramStudi
        deleteProgramStudi(id: ID!): ProgramStudi
        restoreProgramStudi(id: ID!): ProgramStudi
    }
`;

module.exports = typeDefs;