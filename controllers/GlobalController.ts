import { Controller } from "../libs/Controller";
import { JobOffer } from "../src/types/JobOfferTypes";
import { jobOffers } from "../src/data";

export class GlobalsController extends Controller {
  public homepage() {
    const sortedNotices: JobOffer[] = jobOffers.sort((a, b) => {
      return b.start_date.getTime() - a.start_date.getTime();
    });
    
    const recentNotices: JobOffer[] = [sortedNotices[0], sortedNotices[1], sortedNotices[2]];
    
    this.response.render("pages/home", {recentNotices: recentNotices});
  }
}