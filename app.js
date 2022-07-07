const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();

const port = process.env.PORT || 8000;

require("dotenv").config();
