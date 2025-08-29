import z, { parse, string } from "zod";
import { Controller } from "../libs/Controller";
import { JobData, JobOffer } from "../src/types/JobOfferTypes";
import { jobOffers } from "../src/data";
import { missionData } from "../src/data";
import { GlobalsController } from "./GlobalController";

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

  public getRecentNotices() {
    const requestedNotice: JobOffer | undefined = jobOffers.find((jobOffer) => {
      return jobOffer.id === parseInt(this.request.params.id);
    });
    return requestedNotice
  }

  public createNotice() {
    console.log("Page de création d'une annonce affichée !")
    const skillList: object[] = missionData.skills;
    const missionTypes: object[] = missionData.missionTypes;
    const salaryUnits: object[] = missionData.salaryUnits;
    this.response.render("pages/noticeCreation.ejs", {
      skills: skillList,
      missions: missionTypes,
      units: salaryUnits,
    });
  }

  public addNotice() {
    console.log("Ajout d'une annonce demandée par l'utilisateur !")
    this.response.status(200).render("pages/noticeAdditionSuccess");
  }

  public editNotice() {
    console.log("Modification d'une annonce demandée par l'utilisateur !")
    const requestedNotice: JobOffer | undefined = jobOffers.find((jobOffer) => {
      return jobOffer.id === parseInt(this.request.params.id);
    });
    console.log(requestedNotice);

    this.response.render("pages/noticeEdition.ejs", { notice: requestedNotice });
  }

  public deleteNotice() {
    console.log("Suppression d'une annonce demandée par l'utilisateur !")
    const requestedNotice: JobOffer | undefined = jobOffers.find((jobOffer) => {
      return jobOffer.id === parseInt(this.request.params.id);
    });
    console.log(requestedNotice);

    this.response.render("pages/noticeDeletion.ejs", { notice: requestedNotice });
  }
}