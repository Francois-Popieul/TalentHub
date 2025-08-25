import z, { string } from "zod";
import { Controller } from "../libs/Controller";

export class BookController extends Controller {
  public browseNotices() {
    const success = this.request.query.success;
    let flash = null;

    if (success === "true") {
      flash = {
        type: "success",
        message: "Le livre a bien été créé.",
      };
    } else if (success === "false") {
      flash = {
        type: "error",
        message: "Une erreur est survenue lors de la création du livre.",
      };
    }

    this.response.render("pages/notice.ejs");
  }
}