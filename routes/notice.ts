import { Router } from "express";
import { NoticeController } from "../controllers/NoticeController";

// Create a notice router
const noticeRouter = Router();

// Display all job offers
noticeRouter.get("/", (request, response) => {
    console.log("Route des annonces appelée !");
  const controller = new NoticeController(request, response);
  controller.browseNotices();
});

// Display the form to add a job offer
noticeRouter.get("/add", (request, response) => {
  const controller = new NoticeController(request, response);
  controller.createNotice();
});

// Process the form to add a job offer
noticeRouter.post("/", (request, response) => {
  const controller = new NoticeController(request, response);
  controller.addNotice();
});

// Display a specific job offer
noticeRouter.get("/:id", (request, response) => {
  console.log("Controleur de l'annonce sélectionnée appelé !");  
  const controller = new NoticeController(request, response);
  controller.readNotice();
});

// Edit a job offer
noticeRouter.post("/edit/:id", (request, response) => {
  const controller = new NoticeController(request, response);
  controller.editNotice();
});

// Delete a job offer
noticeRouter.post("/delete/:id", (request, response) => {
  const controller = new NoticeController(request, response);
  controller.deleteNotice();
});

export default noticeRouter;