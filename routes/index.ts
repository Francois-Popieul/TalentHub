import { Router } from "express";
import globalRouter from "./globals";
import noticeRouter from "./notice";

// Create the main router
const router = Router();

// Link the global router to the main router
router.use(globalRouter);

// Link the notice router to the main router
router.use('/notices', noticeRouter);

export default router;