# api-rest-nodejs

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
Em seguida. crie um arquivo chamado app.js. Esse arquivo será o nosso ponto de entrada para a execução do código.

Use as seguintes linhas para importar as dependências do nosso projeto.

```node
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
```

Agora vamos preparar a configuração de rotas. Teremos duas rotas centrais na nossa API
* Rota / 
* Rota /person

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



---

O código gabarito é deixado como referência aqui e pode ser baixado pelo comando abaixo:
```console
https://github.com/corelioBH/api-rest-nodejs.git
```
