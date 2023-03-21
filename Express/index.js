const express = require("express");
const app = express();

app.get("/test", function (req, res) {
  res.send("Hola");
}); // rotas só digitar a rota no navegador essa e a principal

app.get("/sobre", function (req, res) {
  res.send(
    '<h1 style="background-color: red; color: white">minha pagina sobre</h1>'
  );
}); // rotas essa e a http://localhost:8081/sobre

app.get("/blog", function (req, res) {
  res.send(" Seja bem vindo ao meu Blog ");
}); // rotas essa e a http://localhost:8081/blog

//// parametro

app.get("/ola/:nome/:cargo", function (req, res) {
  res.send(
    ` <h1 style="background-color: black; color: white">Olá ${req.params.nome}</h1>`
  );

  // res.send(
  //   `<h1 style="background-color: blue; color: white"> Seu cargo ${req.params.cargo}</h1>` so da mandar um sed por rota
  // );
}); // para passar um parametro so colocar :nome do parametro

app.get("/blog", function (req, res) {
  res.send(" Seja bem vindo ao meu Blog ");
}); // rotas essa e a http://localhost:8081/blog

// colocando arquivos html utiliza outra funcao resp.sendFile;

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/html/index.html");
}); // rotas essa e a http://localhost:8081

app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081");
}); // ultima linha do codigo sempre;

// instalado nodemon so colocar isso na linha de comando que ele realiza o milagre amem igreja
