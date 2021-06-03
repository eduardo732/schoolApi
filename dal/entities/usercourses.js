module.exports = function (sequelize, Datatypes) {
  const UserCourse = sequelize.define(
    "userCourses",
    {
      userId: Datatypes.INTEGER,
      courseId: Datatypes.INTEGER,
    },
    {
      tableName: "userCourses",
      timestamps: false,
    }
  );

  UserCourse.associate = function (models) {};

  return UserCourse;
};
