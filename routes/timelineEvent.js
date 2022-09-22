import express from 'express';
import { createEvent, findEventById, getAllEvents, updateEvent } from '../controllers/timelineController.js';
const router = express.Router();

router.get('/', getAllEvents)
router.post('/new', createEvent)
router.get ('/:id', findEventById)
router.patch('/update', updateEvent)

export default router