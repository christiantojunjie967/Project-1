const Mahasiswa = require("../../models/mahasiswa/mahasiswaModel");

const resolvers = {
    Query: {
        mahasiswa: async () => {
            return await Mahasiswa.findAll({
                order: [
                    ["nama", "ASC"]
                ]
            });
        },

        mahasiswaById: async (_, { id }) => {
            const data = await Mahasiswa.findOne({
                where: {
                    id_mahasiswa: id
                }
            });

            if (!data) {
                throw new Error("Mahasiswa tidak ditemukan");
            }

            return data;
        },

        cariMahasiswa: async (_, { keyword }) => {
            const { Op } = require("sequelize");

            return await Mahasiswa.findAll({
                where: {
                    [Op.or]: [
                        {
                            nim: {
                                [Op.like]: `%${keyword}%`
                            }
                        },
                        {
                            nama: {
                                [Op.like]: `%${keyword}%`
                            }
                        },
                        {
                            email: {
                                [Op.like]: `%${keyword}%`
                            }
                        }
                    ]
                },
                order: [
                    ["nama", "ASC"]
                ]
            });
        }
    },

    Mutation: {
        tambahMahasiswa: async (_, { input }) => {
            const waktu = new Date();

            return await Mahasiswa.create(input);
        },

        updateMahasiswa: async (_, { id, input }) => {
            const data = await Mahasiswa.findOne({
                where: {
                    id_mahasiswa: id
                }
            });

            if (!data) {
                throw new Error("Mahasiswa tidak ditemukan");
            }

            await data.update({
                ...input,
                update_at: new Date()
            });

            return data;
        },

        deleteMahasiswa: async (_, { id }) => {
            const data = await Mahasiswa.findOne({
                where: {
                    id_mahasiswa: id
                }
            });

            if (!data) {
                throw new Error("Mahasiswa tidak ditemukan");
            }

            await data.update({
                delete_at: new Date(),
                update_at: new Date()
            });

            return data;
        },

        restoreMahasiswa: async (_, { id }) => {
            const data = await Mahasiswa.findOne({
                where: {
                    id_mahasiswa: id
                }
            });

            if (!data) {
                throw new Error("Mahasiswa tidak ditemukan");
            }

            await data.update({
                delete_at: null,
                update_at: new Date()
            });

            return data;
        }
    }
};

module.exports = resolvers;