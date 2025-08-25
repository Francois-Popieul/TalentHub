import { Router } from "express";
import globalRouter from "./globals";
import noticeRouter from "./notice";

const router = Router();

// On lie le router "globals" au router principale
router.use(globalRouter);

// On lie le router spécial "book" au router principale
router.use('/notices', noticeRouter);

export default router;