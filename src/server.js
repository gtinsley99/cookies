require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const userRouter = require("./users/routes");
const User = require("./users/model");


const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Creates table if not found in db
const syncTables = () => {
    User.sync();
};

app.use(userRouter);


app.get("/health", (req, res) => {
    res.status(200).json({
        message: "API is healthy"
    })
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
    syncTables();
});