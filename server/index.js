const path =require('path')
const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./documents');

const app = express();
const ENV =process.env.NODE_ENV;
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', function (req, res) {
    res.sendFile(`${__dirname}/result.pdf`)
  })

app.listen(port, () => console.log(`Listening on port ${port}`));
 module.exports=app;