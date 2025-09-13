const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDB = require("./mongoose/db");

const app = express();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

// Connect Database
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Authorization', 'Content-Type'] // for token generation
}));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.json({ msg: "Welcome to the app" });
});

// If you have routes in ./routers/index.js, uncomment these:
const routes = require('./routes/index');
app.use('/', routes);

// Start Server
app.listen(PORT, HOSTNAME, () => {
  console.log(`Server listening at http://${HOSTNAME}:${PORT}`);
});
