const jenisKelaminResolvers =
    require("./jenis_kelamin/resolvers");

const programStudiResolvers =
    require("./program_studi/resolvers");

const angkatanResolvers =
    require("./angkatan/resolvers");

const mahasiswaResolvers =
    require("./mahasiswa/resolvers");

module.exports = [
    jenisKelaminResolvers,
    programStudiResolvers,
    angkatanResolvers,
    mahasiswaResolvers
];