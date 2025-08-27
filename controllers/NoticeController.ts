import z, { string } from "zod";
import { Controller } from "../libs/Controller";

export class NoticeController extends Controller {
  public browseNotices() {
    console.log("Page des annonces affichée !")
    this.response.render("pages/noticeList.ejs");
  }

  public readNotice() {
    console.log("Page des annonces affichée !")
  }

  public createNotice() {
    console.log("Page des annonces affichée !")
  }

  public addNotice() {
    console.log("Ajout d'une annonce demandée par l'utilisateur !")
  }

  public editNotice() {
    console.log("Modification d'une annonce demandée par l'utilisateur !")
  }

  public deleteNotice() {
    console.log("Suppression d'une annonce demandée par l'utilisateur !")
  }
}