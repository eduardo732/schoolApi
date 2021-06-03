module.exports = function (sequelize, Datatypes) {
  const Classroom = sequelize.define(
    "classrooms",
    {
      id: {
        type: Datatypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      className: {
        type: Datatypes.STRING,
      },
    },
    {
      tableName: "classrooms",
      timestamps: false,
    }
  );

  Classroom.associate = function (models) {
    Classroom.hasMany(models.users, {
        foreignKey: "classroomId",
        as: "users"
    });
  };

  return Classroom;
};
