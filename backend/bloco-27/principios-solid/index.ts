import plantsRouter from "./routers/plants.router";
import express from "express";

const app = express();
app.use("/plants", plantsRouter);
app.use(express.json());

app.listen(3000, () => console.log("server on"));
