const fs = require("fs");

  

function generateHTML(data) {
let addedString = ""
for (let i = 0; i < data.length; i++){
   addedString += `<div class = "grid-item">
   <div class = "card-head">
      <div>${data.name}</div>
      <div>${data.role}</div>
      </div>

      <div>
      <div></div>
      <div></div>
      <div></div>
      </div>
   
   </div>
   `
}
  
 
  return `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
        <script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
        <title>Employee Roster</title>
        <body>
           <header>
              <h1>Employee Roster</h1>
              
           </header>
           <div id = container>
              
           </div>
  
           <script src="/lib/htmlStuff/website.js"></script>
        </body>
  
        
        <style>
           *{
              margin:0;
              padding: 0;
           }
        body {
        background-image: url("lib/htmlStuff/photos/triangle-mosaic.png");
        font-family: 'Open Sans', sans-serif;
        }
        header{
           background: #3A1C71;  /* fallback for old browsers */
           background: -webkit-linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71);  /* Chrome 10-25, Safari 5.1-6 */
           background: linear-gradient(to right, #FFAF7B, #D76D77, #3A1C71); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
           text-align: center;
           padding-top: 30px;
           padding-bottom: 30px;
        }
        h1{
           color:white;
           font-size: 2.3em;
        }   
        #container{
           padding-left: 20px;
           padding-right: 20px;
           display: grid;
           grid-template-columns: auto auto auto auto auto auto;
           grid-template-rows: auto auto;
           grid-column-gap: 10px;
           grid-row-gap: 10px;
        }
        
        .card-head{
           background-color:blue;
            color: white:
        }
        .grid-item{
           
        }
  
        </style>`
}

module.exports = generateHTML
  


