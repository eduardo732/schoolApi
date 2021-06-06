const { asClass, createContainer, asFunction, asValue } = require("awilix");

// APP START
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/enviroments");

//ROUTES
const Routes = require("../api/routes");
const StudentRoutes = require("./routes/student.routes");
const CourseRoutes = require("./routes/course.routes");
const TeacherRoutes = require("./routes/teacher.routes");

//BUSINESS
const {
  CourseBusiness,
  RegistrationBusiness,
  SectionBusiness,
  StudentBusiness,
  SubjectBusiness,
  TeacherBusiness,
} = require("../domain");
//Controllers
const {
  StudentController,
  TeacherController,
  CourseController,
} = require("../api/controllers");

//SERVICES
const {
  CourseService,
  RegistrationService,
  SectionService,
  StudentService,
  SubjectService,
  TeacherService,
} = require("../services");

//REPOSITORIES
const {
  CourseRepository,
  RegistrationRepository,
  SectionRepository,
  StudentRepository,
  SubjectRepository,
  TeacherRepository,
} = require("../dal/repositories");

//DB
const db = require("../dal/models");

const container = createContainer();

container
  .register({
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
    StudentController: asClass(StudentController).singleton(),
    TeacherController: asClass(TeacherController).singleton(),
    CourseController: asClass(CourseController).singleton(),
    StudentRoutes: asFunction(StudentRoutes).singleton(),
    TeacherRoutes: asFunctuin(TeacherRoutes).singleton(),
    CourseRoutes: asFunction(CourseRoutes).singleton(),
  })
  .register({
    config: asValue(config),
  })
  .register({
    db: asValue(db),
  })
  .register({
    CourseService: asClass(CourseService).singleton(),
    RegistrationService: asClass(RegistrationService).singleton(),
    SectionService: asClass(SectionService).singleton(),
    StudentService: asClass(StudentService).singleton(),
    TeacherService: asClass(TeacherService).singleton(),
    SubjectService: asClass(SubjectService).singleton(),
  })
  .register({
    CourseRepository: asClass(CourseRepository).singleton(),
    RegistrationRepository: asClass(RegistrationRepository).singleton(),
    SectionRepository: asClass(SectionRepository).singleton(),
    StudentRepository: asClass(StudentRepository).singleton(),
    TeacherRepository: asClass(TeacherRepository).singleton(),
    SubjectRepository: asClass(SubjectRepository).singleton(),
  })
  .register({
    CourseBusiness: asClass(CourseBusiness).singleton(),
    RegistrationBusiness: asClass(RegistrationBusiness).singleton(),
    SectionBusiness: asClass(SectionBusiness).singleton(),
    StudentBusiness: asClass(StudentBusiness).singleton(),
    TeacherBusiness: asClass(TeacherBusiness).singleton(),
    SubjectBusiness: asClass(SubjectBusiness).singleton(),
  });

module.exports = container;
