const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write("<h1 style='color:blue;'>Route is / !!</h1>");
        res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button')
        res.write('</body>');
        res.write('</html>');
        res.end();
    } else if (req.url === "/message" && req.method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt', message);
            res.writeHead(302, {
                Location: '/'
            });
            res.end();
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head>');
        res.write('</head>');
        res.write('<body>');
        res.write(`<h1 style="color:blue;">Route is ${url} !!</h1>`);
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    
});

server.listen(3000);