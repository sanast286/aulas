const http = require('http');
const fs = require('fs');
const path = require('path');

// Defina a pasta onde os arquivos HTML estão localizados
const htmlFolderPath = path.join(__dirname, 'html');

// Cria o servidor HTTP
const server = http.createServer((req, res) => {
  // Define o caminho do arquivo com base na URL da requisição
  let filePath = path.join(htmlFolderPath, req.url === '/' ? 'index.html' : req.url);

  // Extrai a extensão do arquivo para determinar o tipo de conteúdo
  const ext = path.extname(filePath);

  let contentType = 'text/html';

  switch (ext) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Lê o arquivo do sistema
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // Página não encontrada
        fs.readFile(path.join(htmlFolderPath, '404.html'), (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        // Algum erro do servidor
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Sucesso, arquivo encontrado
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// Defina uma porta
const PORT = process.env.PORT || 5000;

// O servidor começa a escutar as requisições
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));