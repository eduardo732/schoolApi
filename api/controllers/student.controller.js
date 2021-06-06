const mapper = require("automapper-js");
const { StudentDto } = require("../dtos");
class StudentController {
  constructor({ StudentService }) {
    this.__studentService = StudentService;
  }
  async getStudents(req, res) {
    const students = await this._studentService.getAll();
    students = students.map((student) => mapping(StudentDto, student));
    return res.send({
      payload: students,
    });
  }

  async getStudent(req, res) {
    const { id } = req.params;
    const student = await this._studentService.get(id);
    student = mapper(StudentDto, student);
    return res.send({
      payload: student,
    });
  }

  async createStudent(req, res) {
    const { body } = req;
    const createdStudent = await this._studentService.create(body);
    const student = mapper(StudentDto, createdStudent.toJSON());
    return res.status(201).send({
      payload: student,
    });
  }

  async updateStudent(req, res) {
    const { body } = req;
    const { id } = req.params;
    await this._studentService.update(id, body);
    return res.status(204).send();
  }

  async deleteStudent(req, res) {
    const { id } = req.params;
    await this._studentService.delete(id);
    return res.status(204).send();
  }
}
module.exports = StudentController;
