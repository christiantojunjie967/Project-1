const typeDefs= `#graphql
    type JenisKelamin {
        id_jenis_kelamin: ID!
        kode: String!
        nama: String!
        created_at: String
        updated_at: String
        deleted_at: String
    }

    input JenisKelaminInput{
        kode: String!
        nama: String!
    }

    extend type Query{
        jenisKelamin: [JenisKelamin]
        jenisKelaminById(id: ID!): JenisKelamin
        cariJenisKelamin(keyword: String!): [JenisKelamin]
    }

    extend type Mutation {
        tambahJenisKelamin(input: JenisKelaminInput!): JenisKelamin
        updateJenisKelamin(
            id: ID!
            input: JenisKelaminInput!
        ): JenisKelamin
        deleteJenisKelamin(id: ID!): JenisKelamin
        restoreJenisKelamin(id: ID!): JenisKelamin
    }
`;

module.exports = typeDefs;