const ProgramStudi = require("../../models/program_studi/programStudiModel");

const resolvers = {
    Query: {
        programStudi: async () => {
            return await ProgramStudi.findAll({
                order: [
                    ["nama", "ASC"]
                ]
            });
        },

        programStudiById: async (_, { id }) => {
            const data = await ProgramStudi.findOne({
                where: {
                    id_program_studi: id
                }
            });

            if (!data) {
                throw new Error("Program studi tidak ditemukan");
            }

            return data;
        }
    }
};

module.exports = resolvers;