import z, { parse, string } from "zod";
import { Controller } from "../libs/Controller";
import { JobOffer } from "../src/types/JobOfferTypes";
import { jobOffers } from "../src/data";

export class NoticeController extends Controller {
  public browseNotices() {
    console.log("Page des annonces affichée !")
    const noticeList: JobOffer[] = jobOffers;

    this.response.render("pages/noticeList.ejs", { notices: noticeList });
  }

  public readNotice() {
    console.log("Page de l'annonce sélectionnée affichée !")
    const requestedNotice: JobOffer | undefined = jobOffers.find((jobOffer) => {
      return jobOffer.id === parseInt(this.request.params.id);
    });
    console.log(requestedNotice);

    this.response.render("pages/notice.ejs", { notice: requestedNotice });
  }

  public createNotice() {
    console.log("Page de création d'une annonce affichée !")
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