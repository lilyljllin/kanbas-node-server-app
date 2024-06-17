import model from "./model.js";
export const createCourse = (course) => {
    delete course._id
    return model.create(course);
};
export const getAllCourses = () => model.find();
export const deleteCourse = (id) => model.deleteOne({ _id: id });
export const updateCourse = (id, course) => model.updateOne({ _id: id }, { $set: course });
