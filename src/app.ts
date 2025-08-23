import express, { Application } from 'express';
import greetingRoute from './routes/greeting.route';  // import your router

const app: Application = express();

app.use(express.json());

// use the imported router directly
app.use("/greeting", greetingRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
