const express = require("express");
const cors = require("cors");
const app = express();

//midleware
app.use(express.json);
app.use(cors());

app.get("/", (req, res) => {
	console.log("working");
	res.send(":)");
});

app.listen(5000, () => {
	console.log("listening on port 5000");
});
