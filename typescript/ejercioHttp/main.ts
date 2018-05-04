
import * as http from 'http';
import * as https from 'https';


class Cosa{
    data:any;
    constructor(){
        this.data="cosa";
    }
    connectToServer(){
        console.log("Comienza la peticion");
        var ourThis=this;
        https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', function (resp)  {
            ourThis.data = '';

          // A chunk of data has been recieved.
          resp.on('data', function (chunk) {
            ourThis.data += chunk;
          });

          // The whole response has been received. Print out the result.
          resp.on('end', function () {
            console.log(JSON.parse(this.data).explanation);
          });

        }).on("error", function (err)  {
          console.log("Error: " + err.message);
        });
        console.log("Fin de la peticion");
        
    }
    printData(){
        console.log(this.data)
    }

}

let clase:Cosa=new Cosa();
clase.connectToServer();
clase.printData();
