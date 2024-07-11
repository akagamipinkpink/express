import express from 'express';
import router from './router/route.js';
const app = express();

app.use("/api",router);

export default app;