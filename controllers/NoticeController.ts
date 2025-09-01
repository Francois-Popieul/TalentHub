import { z } from "zod";
import { Controller } from "../libs/Controller";
import { JobData, JobOffer } from "../src/types/JobOfferTypes";
import { jobOffers } from "../src/data";
import { missionData } from "../src/data";

export class NoticeController extends Controller {
  public browseNotices() {
    console.log("Page des annonces affichée !")
    const noticeList: JobOffer[] = jobOffers;
    const enrichedNotices = noticeList.map(notice => ({
      ...notice,
      skillLabels: this.getSkillNames(notice.skills)
    }));
    this.response.render("pages/noticeList.ejs", { notices: enrichedNotices });
  }

  public readNotice() {
    console.log("Page de l'annonce sélectionnée affichée !")
    const requestedNotice: JobOffer | undefined = jobOffers.find((jobOffer) => {
      return jobOffer.id === parseInt(this.request.params.id);
    });
    if (requestedNotice) {
      const enrichedNotice = { ...requestedNotice, skillLabels: this.getSkillNames(requestedNotice.skills) }
      console.log(enrichedNotice);
      this.response.render("pages/notice.ejs", { notice: enrichedNotice });
    }
    else {
      this.response.status(404).render("errors/404.ejs");
    }
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
      errors: {},
      values: {},
    });
  }

  public addNotice() {

    const verificationSchema = z.object({
      title: z.string().min(10),
      description: z.string().min(50).max(1000),
      skills: z.string().array(),
      type: z.string(),
      start_date: z.coerce.date(),
      salary: z.coerce.number(),
      salary_unit: z.string().min(2).max(20),
      password: z.string().refine(validatePassword),
    });

    function validatePassword(password: string) {
      if (password.length >= 12) {
        return true
      }
      else {
        return false
      }
    }

    const newOffer: JobOffer = {
      id: jobOffers.length + 1,
      title: this.request.body.notice_title,
      description: this.request.body.notice_description,
      skills: [this.request.body.notice_skills],
      type: this.request.body.notice_mission_type,
      start_date: new Date(this.request.body.notice_onboarding_date),
      salary: this.request.body.notice_salary,
      salary_unit: this.request.body.notice_salary_unit,
      password: this.request.body.password,
    }
    const result = verificationSchema.safeParse(newOffer);
    if (!result.success) {
      const errors = z.treeifyError(result.error);
      const skillList: object[] = missionData.skills;
      const missionTypes: object[] = missionData.missionTypes;
      const salaryUnits: object[] = missionData.salaryUnits;
      this.response.render("pages/noticeCreation.ejs", {
        skills: skillList,
        missions: missionTypes,
        units: salaryUnits,
        errors: errors.properties,
        values: this.request.body,
      });
      return;
    }

    jobOffers.push(newOffer);
    this.response.render("pages/noticeAdditionSuccess.ejs");
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

  public getSkillNames(values: string[]): string[] {
    return values.map(value => {
      const skill = missionData.skills.find(skill => skill.value === value);
      return skill ? skill.label : "Compétence inconnue";
    });
  }

  public getMissionType(value: string): string {
    for (const type of missionData.missionTypes) {
      if (type.value === value) {
        return type.label;
      }
    }
    return "Type de mission inconnu";
  }

  public getSalaryUnit(value: string): string {
    for (const unit of missionData.salaryUnits) {
      if (unit.value === value) {
        return unit.label;
      }
    }
    return "Unité inconnue";
  }
}

