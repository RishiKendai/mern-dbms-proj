const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();
const path = require("path")
const app = express();
const serverPort = process.env.SERVER_PORT;
const port = process.env.PORT || serverPort;

app.use(cors());
app.use(express.json());

// Connect Mongoose
const uri = process.env.LOCAL_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log(`MongoDB connected to port ${uri}`);
})

// Require Routes from Route Folder 
const addQuiz = require("./routes/quiz");


app.use("/quiz", addQuiz);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '/client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    })
} else {
    app.get('/', (req, res) => {
        res.send('API running');
    })
}

app.listen(port, () => {
    console.log(`Server running Successfully on port ${port}`);
})
