const { DataTypes } = require("sequelize");
const sequelize = require("../../config/database");

const Mahasiswa = sequelize.define(
    "Mahasiswa",
    {
        id_mahasiswa: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        nim: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },

        nama: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        id_jenis_kelamin: {
            type: DataTypes.UUID,
            allowNull: false
        },

        tempat_lahir: {
            type: DataTypes.STRING(50),
            allowNull: false
        },

        tanggal_lahir: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },

        alamat: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        no_hp: {
            type: DataTypes.STRING(15),
            allowNull: false
        },

        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        id_program_studi: {
            type: DataTypes.UUID,
            allowNull: false
        },

        id_angkatan: {
            type: DataTypes.UUID,
            allowNull: false
        },

        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },

        deleted_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        tableName: "mahasiswa",
        timestamps: false
    }
);

module.exports = Mahasiswa;