const http = require('http');
const fs = require('fs');
const path = require('path');

// Utilize a pasta atual como a pasta base
const basePath = __dirname;

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  let filePath = path.join(basePath, req.url === '/' ? '' : req.url);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    if (stats.isFile()) {
      fs.readFile(filePath, (err, content) => {
        if (err) {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content, 'utf-8');
      });
    } else if (stats.isDirectory()) {
      fs.readdir(filePath, (err, files) => {
        if (err) {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Directory Listing</h2>');
        res.write('<ul>');
        files.forEach(file => {
          res.write(`<li><a href="${path.join(req.url, file)}">${file}</a></li>`);
        });
        res.write('</ul>');
        res.end();
      });
    }
  });
});

// Defina uma porta
const PORT = process.env.PORT || 5000;

// O servidor começa a escutar as requisições
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

