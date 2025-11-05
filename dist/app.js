import express from 'express';
import router from './services/routes.js';
import { databaseConntection } from './db/connection.js';
import { config } from 'dotenv';
config({
    path: "./.env",
});
const app = express();
const port = 8080;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use("/api/v1", router);
databaseConntection().then(() => {
    app.listen(port, () => {
        return console.log(`Express is listening at http://localhost:${port}`);
    });
}).catch((error) => {
    console.log(error);
    process.exit(1);
});
