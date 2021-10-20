let http = require('http');
const port = 8000;

let server = http.createServer((req, res) => {
    let body ="";
    // header
    res.writeHead(200, "ok", {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
    });
    // when request is recieved
    req.on('data', (data) =>{
      data = data.toString('utf-8');
      try{
          data = JSON.parse(data);
          console.log(data);
      } catch (error) {
          console.log('cant stringify this');
      }
      body += data.userName 
    })
    // end of request
    req.on("end", () => {
        res.write(body);
        res.end();
      });
});

server.listen(port, error => {
    if(error) {
        console.log(error);
        return;
    }
    console.log(`listening on port ${port}`)
})