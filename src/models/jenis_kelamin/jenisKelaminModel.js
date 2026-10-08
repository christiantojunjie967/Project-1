const {DataTypes} = require("sequelize");
const sequelize = require("../../config/database")

const JenisKelamin = sequelize.define(
    "JenisKelamin",
    {
        id_jenis_kelamin: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },

        kode:{
            type: DataTypes.CHAR(1),
            allowNull: false,
            unique: true
        },

        nama: {
            type: DataTypes.STRING(20),
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
        tableName:"jenis_kelamin",
        timestamps: false
    }
);

module.exports = JenisKelamin;