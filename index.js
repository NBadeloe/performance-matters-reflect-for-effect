const express = require('express');
const { json } = require('express/lib/response');
const fetch = require('node-fetch');
const app = express();


const vragenlijstUrl = `https://jeugdzorg.api.fdnd.nl/v1/vragenlijst`;
const vraagUrl = `https://jeugdzorg.api.fdnd.nl/v1/vraag`;
const port = 5500;

app.use(express.static('static'));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views'); 

//deploy on port 3000
app.listen(port, () =>{
    console.log(`app is availible on http://localhost:5500`)
})

app.get('/', async (req, res) => {
      fetch(vraagUrl)
          .then(async response => {
            const vragen = await response.json()

            res.render('overview', {
              title: 'Vragen',
              vragen
            });
          })
      })
;



