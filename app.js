const http = require("http");

const fs = require('fs');
const path = require('path');
const mimeTypes = require('./modules/mimeTypes');

// console.log(mimeTypes);

const port = 5000;


function getStaticFiles(resp, filePath, ext) {

    resp.setHeader('Content-Type', mimeTypes[ext]);

    fs.readFile('./public' + filePath, function (error, data) {
        if (error) {
            resp.statusCode = 404;
            console.log(' Помилка!', error, "file NOT SEND==>>", './public' + filePath);

            resp.end()
        } else {
            console.log('Відправляю файл:', './public' + filePath);
            resp.end(data)
        }
    })


}


http.createServer(function (req, resp) {
    const url = req.url;

    switch (url) {
        case '/portfolio':
            getStaticFiles(resp, '/html/index2.html', '.html')
            break;

        case '/another':
            resp.write(`<h1>url:ANOTher</h1>`)

            break;

        default:
            const extName = String(path.extname(url)).toLowerCase();
            // console.log('URL:', url, 'extName:', extName, 'mimeType:', mimeTypes[extName]);
            if (extName in mimeTypes) {
                getStaticFiles(resp, url, extName);
                return
            }
            resp.end()
            break;
    }


}).listen(port)
