const express = require("express");
const app = express();
const port = 'https://recipe-mernweb-app.onrender.com'
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connection } = require("../server/db/connection");
const router = require('../server/routes/routes')
require("dotenv").config();

connection();

app.use(express.json());
app.use(cors({ origin: "https://recipe-mernapp.vercel.app", credentials: true }));
app.use(cookieParser());

app.use("/api", router);

app.listen(port, () => console.log(`Server running on port ${port}`));


