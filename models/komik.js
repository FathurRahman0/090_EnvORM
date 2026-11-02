module.exports = (Sequelize, DataTypes) => {
    const Komik = Sequelize.define("Komik", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
        },
        
    }   );
    return Komik;
};