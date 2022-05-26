//import packages 
const express = require('express');
const { json } = require('express/lib/response');
const fetch = require('node-fetch');
const app = express();

//most used vars 
const vragenlijstUrl = `https://jeugdzorg.api.fdnd.nl/v1/vragenlijst`;
const vraagUrl = `https://jeugdzorg.api.fdnd.nl/v1/vraag`;
const port = 5500;

// use root route for files and css lol 
app.use(express.static('static'));
app.use('/styles', express.static(__dirname + '/styles'))

//use views folder and ejs 
app.set('view engine', 'ejs');

app.set('views', __dirname + '/views'); 

//deploy on port 5500
app.listen(port, () =>{
    console.log(`app is availible on http://localhost:5500`)
})

app.get('/', async (req, res) => {

  // get data from api
    let settings = { method: "Get" }  
    await fetch(vraagUrl, settings)
    .then(async response => {
    const vragen = await response.json()

      //send vragen data to view
      res.render('overview', {
        title: 'Vragen',
        vragen: vragen.data
      });
    })
})
;

app.get('/create', (req, res) => {
      //render to view
      res.render('create', {
        title: 'Vragen',
       
      });
    })
    ;

    app.post('/create', (req,res) =>{
      const createData = {
        method: 'POST',
        body: JSON.stringify(req.data),
        headers: {'Content-Type': 'application/json'}
      }

      fetch(vraagUrl, createData).then(function () {
        res.render('create', {
          title: 'vraag toevoegen',
        })
      })
    })
    ;




