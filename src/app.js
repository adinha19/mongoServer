import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import router from './router';

const app = express();
app.use(bodyParser.json());
app.use(helmet());

router(app);

export default app;