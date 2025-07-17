const { error, log } = require("console");
const http = require("http")
const fs = require("fs")
const PORT = 8082;

const requestHandler=(req,res)=>{
    let filename = '';

    switch(req.url){
        case "/":
            filename = "index.html";
            break;
        case "/About":
            filename = "About.html";
            break;
        case "/Contact":
            filename = "Contact.html";
            break;
        default:
            filename = "Error.html";
    }

    fs.readFile(filename,(error,resut)=>{
        if(!error){
            res.end(resut)
        }
    })
}

const server = http.createServer(requestHandler)
server.listen(PORT,(error)=>{
    if(error){
        console.log(error);
        
    }
    else
    {
        console.log("server is started:",PORT);
    }
})