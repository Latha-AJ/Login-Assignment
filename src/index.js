const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const route = require("./route.js")
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://function-UP:Latha7226@cluster0.acdvxwp.mongodb.net/Login-Assignment?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});



