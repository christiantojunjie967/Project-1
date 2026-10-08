const typeDefs = `#graphql

    type Mahasiswa {
        id_mahasiswa: ID!
        nim: String!
        nama: String!
        id_jenis_kelamin: ID!
        tempat_lahir: String
        tanggal_lahir: String
        alamat: String
        no_hp: String
        email: String
        id_program_studi: ID
        id_angkatan: ID
        created_at: String
        updated_at: String
        deleted_at: String
    }

    input MahasiswaInput {
        nim: String!
        nama: String!
        id_jenis_kelamin: ID!
        tempat_lahir: String
        tanggal_lahir: String
        alamat: String
        no_hp: String
        email: String
        id_program_studi: ID
        id_angkatan: ID
    }

    extend type Query {
        mahasiswa: [Mahasiswa]
        mahasiswaById(id: ID!): Mahasiswa
        cariMahasiswa(keyword: String!): [Mahasiswa]
    }

    extend type Mutation {
        tambahMahasiswa(input: MahasiswaInput!): Mahasiswa
        updateMahasiswa(
            id: ID!
            input: MahasiswaInput!
        ): Mahasiswa
        deleteMahasiswa(id: ID!): Mahasiswa
        restoreMahasiswa(id: ID!): Mahasiswa
    }
`;

module.exports = typeDefs;