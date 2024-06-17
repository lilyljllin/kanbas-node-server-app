import Database from "../Database/index.js";
import * as dao from "./dao.js"
export default function CourseRoutes(app) {

    const createCourse = async(req, res) => {
        const newCourse = await dao.createCourse(req.body);
        res.json(newCourse);
    }
    const deleteCourse = async(req, res) => {
        const { id } = req.params;
        const status = await dao.deleteCourse(id);
        res.json(status);
    }
    const updateCourse = async(req, res) => {
        const { id } = req.params;
        const course = req.body;
        const status = await dao.updateCourse(id, course);
        res.json(status);
    }
    const getAllCourses = async(req, res) => {
        const courses = await dao.getAllCourses();
        res.json(courses);
        return;
    }


    app.post("/api/courses", createCourse);
    app.get("/api/courses", getAllCourses);
    app.delete("/api/courses/:id", deleteCourse);
    app.put("/api/courses/:id", updateCourse);


}
