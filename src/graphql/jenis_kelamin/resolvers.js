const JenisKelamin = require("../../models/jenis_kelamin/jenisKelaminModel");
const resolvers = {
    Query: {
        jenisKelamin: async () => {
            return await JenisKelamin.findAll({
                order: [
                    ["nama", "ASC"]
                ]
            });
        },

        jenisKelaminById: async (_, { id }) => {
            const data = await JenisKelamin.findOne({
                where: {
                    id_jenis_kelamin: id
                }
            });
            if (!data) {
                throw new Error("Jenis kelamin tidak ditemukan");
            }

            return data;
        },

        cariJenisKelamin: async (_, { keyword }) => {
            const { Op } = require("sequelize");
            return await JenisKelamin.findAll({
                where: {
                    [Op.or]: [
                        {
                            kode: {
                                [Op.like]: `%${keyword}%`
                            }
                        },
                        {
                            nama:{
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
        tambahJenisKelamin: async (_, { input }) => {
            const waktu = new Date();
            return await JenisKelamin.create({
                ...input,
                create_at: waktu,
                update_at: waktu,
                delete_at: null
            });
        },

        updateJenisKelamin: async(_, { id, input }) => {
            const data = await JenisKelamin.findOne({
                where: {
                    id_jenis_kelamin: id
                }
            });


            if (!data) {
                throw new Error("Jenis kelamin tidak ditemukan");
            }

            await data.update({
                ...input,
                update_at: new Date()
            });

            return data;
        },
        
        deleteJenisKelamin: async (_, { id }) => {
            const data = await JenisKelamin.findOne({
                where: {
                    id_jenis_kelamin: id
                }
            });
            if (!data) {
                throw new Error("Jenis kelamin tidak ditemukan");
            }
            await data.update({
                delete_at: new Date(),
                update_at: new Date()
            });
            return data;
        },

        restoreJenisKelamin: async (_, { id }) => {
            const data = await JenisKelamin.findOne({
                where: {
                    id_jenis_kelamin: id
                }
            });
            if (!data) {
                throw new Error("Jenis kelamin tidak ditemukan");
            }
            await data.update({
                delete_at: null,
                update_at: new Date()
            });
        }
    }
};

module.exports = resolvers;