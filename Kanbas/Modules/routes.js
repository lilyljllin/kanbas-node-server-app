// import db from "../Database/index.js";
import * as dao from "./dao.js";
export default function ModuleRoutes(app) {

  const createModule = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
    };
    const module = await dao.createModule(newModule);
    res.json(module);
  };
const deleteModule = async (req, res) => {
  const { mid } = req.params;
  const status = await dao.deleteModule(mid);
  res.json(status);
};
const updateModule = async (req, res) => {
  const { mid } = req.params;
  const status = await dao.updateModule(mid, req.body);
  res.json(status);
}
const getModuleForCourse = async (req, res) => {
  const { cid } = req.params;
  const modules = await dao.findModuleByCourse(cid);
  res.json(modules);
}

  app.get("/api/courses/:cid/modules", getModuleForCourse);
  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:mid", deleteModule);
  app.put("/api/modules/:mid", updateModule);


}
