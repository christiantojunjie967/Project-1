const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Angkatan = sequelize.define(
    "Angkatan",
    {
        id_angkatan: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        tahun_ajaran: {
            type: DataTypes.STRING(9),
            allowNull: false,
            unique: true
        },

        create_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        update_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        delete_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        tableName: "angkatan",
        timestamps: false
    }
);

module.exports = Angkatan;