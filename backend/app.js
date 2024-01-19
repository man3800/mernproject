const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require('cors');
const cookieparser = require('cookie-parser');
const errorHandler = require('./middleware/error');



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
app.use(cors());

// ROUTES MIDDLEWARE
app.use("/api", userRouters);

// ERROR MIDDLEWARE
app.use(errorHandler);


const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
