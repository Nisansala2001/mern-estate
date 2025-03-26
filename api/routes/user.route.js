import express from 'express';

import { test } from '../controllers/user.controller.js'; // Add `.js` extension

const router = express.Router();

router.get('/test', test);


export default router;
