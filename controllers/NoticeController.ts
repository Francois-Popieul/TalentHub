import z, { string } from "zod";
import { Controller } from "../libs/Controller";

export class NoticeController extends Controller {
  public browseNotices() {
    console.log("Page des annonces affichée !")
    this.response.render("pages/noticeList.ejs");
  }
}