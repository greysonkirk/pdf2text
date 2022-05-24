const express = require("express");
const fileUpload = require("express-fileupload");
const pdfParse = require("pdf-parse");
const ReadText = require('text-from-image')
const app = express();

app.use("/", express.static("public"));
app.use(fileUpload());

app.post("/extract-text", (req, res) => {
    if (!req.files && !req.files.pdfFile) {
        res.status(400);
        res.end();
    }

    pdfParse(req.files.pdfFile).then(result => {
        res.send(result.text);
    });
});


app.listen(3000);
// // Start the API server
// app.listen(PORT, function () {
//     console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
//   });
