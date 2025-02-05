import express from 'express';
import router from './routes.js';
import 'express-async-errors';

const port = 3000;
const app = express();

app.use(express.json());
app.use(router);

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: err.message });
});

app.listen(port, () => console.log(`Server started at http://localhost:${port} 🚀`));
