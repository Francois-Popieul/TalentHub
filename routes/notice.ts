import { Router } from "express";
import { NoticeController } from "../controllers/NoticeController";
const noticeRouter = Router();

noticeRouter.get("../noticeList", (request, response) => {
    console.log("Route des annonces appelée !");
  const controller = new NoticeController(request, response);
  controller.browseNotices();
});


export default noticeRouter;