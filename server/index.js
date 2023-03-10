require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();

require("./config/mongoose.config");

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "https://healthrecord.vercel.app/"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });


  app.use(cors({
	origin: 'https://healthrecord.vercel.app',
	methods: ['GET', 'POST'],
	allowedHeaders: ['Content-Type', 'Authorization']
  }));


app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/user.route")(app);
app.listen(process.env.PORT || 8000, () => console.log(`Server listening on port ${process.env.PORT || 8000}`));