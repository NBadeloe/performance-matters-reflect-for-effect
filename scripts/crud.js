const vragenlijstUrl = `https://jeugdzorg.api.fdnd.nl/v1/vragenlijst`;
const vraagUrl = `https://jeugdzorg.api.fdnd.nl/v1/vraag`;

const createVraag = document.querySelect('#createVraag')

createVraag.addEventListner('submit', ()=> {


       let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "application/json"
}

let bodyContent = JSON.stringify(    {"vraagId": 1 ,
      "vragenlijstId": document.querySelector("#vragenlijstID"),
      "competentieId": document.querySelector("#compententieID"),
      "vraag": document.querySelector("#vraag") 
});

fetch("https://jeugdzorg.api.fdnd.nl/v1/vraag", { 
  method: "POST",
  body: bodyContent,
  headers: headersList
}).then(function(response) {
  return response.text();
}).then(function(data) {
  console.log(data);
})
})