const express = require("express");
const connectDB = require("./config/connectDB.js");
const userRouter = require("./routes/accountR");
const cvRouter = require("./routes/cvR");
const userPropertyRouter = require("./routes/userPropertyR");
const connectionRoutes = require("./routes/connectionR");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
connectDB();

app.use(express.json());

app.use("/account", userRouter);
app.use("/user/cv", cvRouter);
app.use("/user/property", userPropertyRouter);
app.use("/user/connection", connectionRoutes);

app.listen(process.env.PORT || 8080, () =>
  console.log(`App listening on port ${process.env.PORT}!`)
);