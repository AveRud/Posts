// var http = require('http');
// var url = require('url');
// var querystring = require('querystring');
// var static = require('node-static');
// var file = new static.Server('.', {
//     cache: 0
// });
//
//
// function accept(req, res) {
//
//     if (req.url === '/db.json') {
//         // искусственная задержка для наглядности
//         setTimeout(function() {
//             file.serve(req, res);
//         }, 0);
//     } else {
//         file.serve(req, res);
//     }
//
// }
//
//
// // ------ запустить сервер -------
//
// if (!module.parent) {
//     http.createServer(accept).listen(8080);
// } else {
//     exports.accept = accept;
// }
//
// const form = document.getElementById('form');
//
// form.onsubmit = function (event) {
//     event.preventDefault();
//     console.log(author.value, title.value);
//
// };

