const Angkatan = require("../../models/angkatan/angkatanModel.js");

const resolvers = {
    Query: {
        angkatan: async () => {
            return await Angkatan.findAll({
                order: [
                    ["tahun_ajaran", "ASC"]
                ]
            });
        },

        angkatanById: async (_, { id }) => {
            const data = await Angkatan.findOne({
                where: {
                    id_angkatan: id
                }
            });

            if (!data) {
                throw new Error("Angkatan tidak ditemukan");
            }

            return data;
        },

        cariAngkatan: async (_, { keyword }) => {
            const { Op } = require("sequelize");

            return await Angkatan.findAll({
                where: {
                    tahun_ajaran: {
                        [Op.like]: `%${keyword}%`
                    }
                },
                order: [
                    ["tahun_ajaran", "ASC"]
                ]
            });
        }
    },

    Mutation: {
        tambahAngkatan: async (_, { input }) => {
            const waktu = new Date();

            return await Angkatan.create({
                ...input,
                create_at: waktu,
                update_at: waktu,
                delete_at: null
            });
        },

        updateAngkatan: async (_, { id, input }) => {
            const data = await Angkatan.findOne({
                where: {
                    id_angkatan: id
                }
            });

            if (!data) {
                throw new Error("Angkatan tidak ditemukan");
            }

            await data.update({
                ...input,
                update_at: new Date()
            });

            return data;
        },

        deleteAngkatan: async (_, { id }) => {
            const data = await Angkatan.findOne({
                where: {
                    id_angkatan: id
                }
            });

            if (!data) {
                throw new Error("Angkatan tidak ditemukan");
            }

            await data.update({
                delete_at: new Date(),
                update_at: new Date()
            });

            return data;
        },

        restoreAngkatan: async (_, { id }) => {
            const data = await Angkatan.findOne({
                where: {
                    id_angkatan: id
                }
            });

            if (!data) {
                throw new Error("Angkatan tidak ditemukan");
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