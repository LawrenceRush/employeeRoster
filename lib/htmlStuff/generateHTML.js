const fs = require("fs");

  

function generateHTML(data) {
   console.log(data)
let addedString = ""
for (let i = 0; i < data.length; i++){
   console.log(data[i].role)
  switch(data[i].role){
   case "Manager":
         addedString += `<div class = "grid-item">
         <div class = "card-head">
         <i class="fas fa-glasses  fa-5x"></i>
            <div>Name: ${data[i].name}</div>
            <div>Role: ${data[i].role}</div>
            </div>
      
            <div class = "card-container">
            <div>Id: ${data[i].id}</div>
            <div>Email: ${data[i].email}</div>
            <div>Office Number: ${data[i].officeNumber}</div>
            </div>
         
         </div>`
      
      break;
    case "Intern":
         addedString += `<div class = "grid-item">
         <div class = "card-head">
         <i class="fas fa-graduation-cap  fa-5x"></i>
            <div>Name: ${data[i].name}</div>
            <div>Role: ${data[i].role}</div>
            </div>
      
            <div class = "card-container">
            <div>Id: ${data[i].id}</div>
            <div>Email: ${data[i].email}</div>
            <div>School: ${data[i].school}</div>
            </div>
         
         </div>`
      
      break;
    case "Engineer":
         addedString += `<div class = "grid-item">
         <div class = "card-head">
         <i class="fas fa-ruler  fa-5x"></i>
            <div>Name: ${data[i].name}</div>
            <div>Role: ${data[i].role}</div>
            </div>
      
            <div class = "card-container">
            <div>Id: ${data[i].id}</div>
            <div>Email: ${data[i].email}</div>
            <div>Github Username: ${data[i].github}</div>
            </div>
         
         </div>`
         
      break;
       
    
  }

  
   
   
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <title>Employee Roster</title>
        <body>
           <header>
              <h1>Employee Roster</h1>
              
           </header>
           <div id = container>
              ${addedString}
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
           grid-column-gap: 20px;
           grid-row-gap: 20px;
           padding-top: 20px;
        }
        
        .card-head{
         background-color:  lightcoral;
          color: white;
          text-align: center;
          padding: 15px;
      }
      .grid-item{
         
      }

      .card-container{
         background-color: #954B75;
         text-align: center;
         color: white;
         padding:15px;
      }

      </style>`
}

module.exports = generateHTML
  


