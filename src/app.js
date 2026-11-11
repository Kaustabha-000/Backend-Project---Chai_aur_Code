import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" })); // to accept json
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // to accept encoded urls with objects
app.use(express.static("public")); // to store files for easy access
app.use(cookieParser()); // to perform CRUD on cookies

export { app };
