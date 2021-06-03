module.exports = function(sequelize, Datatypes) {
    const User = sequelize.define(
        "users",
        {
            id: {
                type: Datatypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: Datatypes.STRING,
                allowNull: false
            },
            lastname: {
                type: Datatypes.STRING,
                allowNull: true
            }
        },
        {
            tableName: "users",
            timestamps: false
        }
    );

    User.associate = function(models) {
        User.belongsTo(models.classrooms, {
            foreignKey: "classroomId",
            as: "classrooms"
        });
        User.belongsToMany(models.courses, {
            through: "usercourses",
            as: "courses",
            foreignKey: "id"
        });
    }

    return User;
};