# Tutorial de API REST com a plataforma Node.JS

Esse tutorial descreve como criar uma API Restful mínima com o Node.JS.


**Verificação do Node**

Primeiro de tudo, vamos garantir que o Node está instalado na sua máquina. Para isso, abra o terminal ou o prompt de comando e digite os seguintes comandos:

```console
node -v
```

```console
npm -v
```

Se não estiver instalado, vá até o site http://nodejs.org e siga os passos para a instalação. Rode o instaladorpara ter disponível os ambientes com o Node.js e o NPM. O NPM é o gerenciador de pacotes para o ambiente Node. Com ele você pode adicionar ou remover dependências no seu projeto. O Node é um ambiente onde podemos rodar aplicações totalmente escritas com Javascript.

**Instalação do servidor Web Express**

Com o Node rodando, vamos instalar o Express. Basta ir até o terminal e digitar:

```console
npm install -g express
```
Com o Express, você é capaz de criar aplicações web com simplicidade em Node.Js

**Inicialização do projeto**

Inicialize o seu projeto Node com o comando abaixo, que irá criar o  arquivo package.json. Esse arquivo é o manifesto de dependências do seu projeto Node.Js

```console
npm init -y
```

**Criação do arquivo de entrada e declaração das dependências**

Crie um diretório chamado apinodejs e se mova para esse diretório na linha de comando.

Crie um diretório chamado src. Todos os arquivos fonte (js) irão ficar abaixo dessa estrutura.

Em seguida. Crie um arquivo chamado ./apinodejs/src/app.js. Esse arquivo será o nosso ponto de entrada para a execução do código.

Use as seguintes linhas para importar as dependências do nosso projeto.

```node
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
```

Agora vamos preparar a configuração de rotas. Teremos duas rotas centrais na nossa API
* Rota / 
* Rota /person

Para isso, modifique o arquivo ./apinodejs/src/app.js para incluir as linhas abaixo.

```node
const router = express.Router();
//Rotas
const index = require('./routes/index');
const personRoute = require('./routes/personRoute');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', index);
app.use('/person', personRoute);

module.exports = app;
```
Vamos agora criar a rota /
Para isso, crie um diretório chamado routes e crie nele um arquivo index.js com o seguinte conteúdo.

```node
const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        title: "Minha API em Node.JS",
        version: "0.0.1"
    });
});

module.exports = router;

```
Vamos agora criar o arquivo de rotas para o recurso pessoa, com operações CRUD básicas.

```node
const express = require('express');
const router = express.Router();
const controller = require('../controllers/personController')

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;
```


Observe que o arquivo acima faz uso de métodos declarados no controlador de pessoas. 

Crie esse controlador no arquivo personController.js dentro do diretório ./apinodejs/src/controllers.


```node

exports.get = (req, res, next) => {
    res.status(200).send('Requisição GET recebida com sucesso!');
};


exports.getById = (req, res, next) => {
    res.status(200).send('Requisição GET recebida com sucesso!');
};



exports.post = (req, res, next) => {
    res.status(201).send('Requisição POST recebida com sucesso!');
};


exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição PUT recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(204).send(`Requisição DELETE recebida com sucesso! ${id}`);
};
```

Vamos agora criar o arquivo que irá rodar o servidor node e um arquivo de configuração para iniciar o serviço.

Crie na raiz do seu projeto um diretorio ./bin e dentro dele um arquivo chamado server.js

```node
const app = require('../src/app');

const port = normalizaPort(process.env.PORT || '3000');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})
```

Na raiz do projeto, crie também o arquivo package.config com o seguinte código.

```json
{
  "name": "node-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "express": "^4.15.4"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./bin/server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

Certifique que a estrutura de pastas do seu projeto esteja conforma figura abaixo

<img src="https://github.com/corelioBH/api-rest-nodejs/blob/master/bin/estruturaProjetoNode.gif"/>

Finalmente, podemos rodar o código. Para isso rode o comando:

```console
nodemon ./bin/server.js
```

O servidor será iniciado na porta 3000 e voce pode invocar as seguintes rotas:

* http://localhost:3000/
* http://localhost:3000/person

---

O código gabarito é deixado como referência aqui e pode ser baixado pelo comando abaixo:
```console
https://github.com/corelioBH/api-rest-nodejs.git
```

