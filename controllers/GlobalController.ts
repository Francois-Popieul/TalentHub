import { Controller } from "../libs/Controller";
import { JobOffer } from "../src/types/JobOfferTypes";
import { jobOffers } from "../src/data";

export class GlobalsController extends Controller {
  public homepage() {
    const recentNotices: JobOffer[] = jobOffers.sort((a, b) => {
      return b.start_date.getTime() - a.start_date.getTime();
    }).slice(0,3);
    
    this.response.render("pages/home", {recentNotices: recentNotices});
  }  
}