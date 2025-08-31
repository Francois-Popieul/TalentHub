import { Controller } from "../libs/Controller";
import { JobOffer } from "../src/types/JobOfferTypes";
import { jobOffers } from "../src/data";
import { NoticeController } from "./NoticeController";

export class GlobalsController extends Controller {
  public homepage() {
    const noticeController = new NoticeController(this.request, this.response);
    const recentNotices: JobOffer[] = jobOffers.sort((a, b) => {
      return b.start_date.getTime() - a.start_date.getTime();
    }).slice(0,3);
    const enrichedNotices = recentNotices.map(notice => ({
      ...notice,
      skillLabels: noticeController.getSkillNames(notice.skills)
    }));
    this.response.render("pages/home", {recentNotices: enrichedNotices});
  }  
}