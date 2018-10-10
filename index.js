var axios = require("axios");
var express = require("express");
var path = require('path');
const app = express();

// Host the following directory to access application
app.use(express.static(path.join(__dirname, '/public')));

function wakeUp () {
  axios.get('http://localhost:8000/wake').then (() => {
    console.log("Requesting wake up...")
  })
}

setTimeout(wakeUp, 1740000)

app.get('/wake', function(res){
  console.log("Rise And Shine!")
})

app.listen(process.env.PORT || 8000, function () {
  console.log('Listening on port 8000!');
 });
