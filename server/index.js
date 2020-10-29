import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import webpack from "webpack";
import middleware from "webpack-dev-middleware";
import webpackConfig from "../webpack.config.dev";
import { notFound, errorHandler } from "./middleware";
import { userRoute } from "./routes";
const PORT = 2000;
const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(middleware(webpack(webpackConfig)));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});
app.use("/api/v1", userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
