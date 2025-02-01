import express from 'express';
import router from './routes.js';

const port = 3000;
const app = express();

app.use(router);

app.listen(port, () => console.log(`Server started at http://localhost:${port} 🚀`));
