module.exports = function (sequelize, Datatypes) {
  const Lecturer = sequelize.define(
    "lecturers",
    {
        lecturerName: Datatypes.String
    },
    {
      tableName: "lecturers",
      timestamps: false,
    }
  );

  Lecturer.associate = function (models) {
    Lecturer.hasOne(models.courses, {
        foreignKey: "lecturerId",
        as: "courses"
    });
  };

  return Lecturer;
};