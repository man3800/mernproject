const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieparser = require('cookie-parser');

// IMPORT ROUTES
const userRouters = require("./routes/user");

// CONNECT DATABASE
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB connection error:", err));

// MIDDLEWARE
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieparser());

// ROUTES MIDDLEWARE
app.use("/api", userRouters);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
