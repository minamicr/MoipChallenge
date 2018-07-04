# MoipChallenge
Moip Technical Challenge (Cristina Minami)
1.	Para instalar a aplicação:
  a.	Instalar o banco de dados MongoDB (HTTP://www.mongodb.com) e criar a pasta “c:\data\db”
  b.	Instalar o Node.js (https://nodejs.org/en/) 
  c.	Baixar a aplicação do github (https://github.com/minamicr) , repositório “MoipChallenge”
  d.	Abrir o shell do sistema operacional e executar o comando “mongod” para inicializar o servidor de banco de dados
  e.	Abrir outra tela do shell, acessar a pasta “frontend” e executar os comandos “npm  install” e em seguida “npm run dev”
  f.	Executar o mesmo processo acima, porém acessando a pasta “backend”
2.	Para executar a aplicação:
  a.	Abrir o browser e acessar a URL HTTP://localhost:8000
  b.	Incluir o cliente ou comprador para que estes sejam listados nas caixas de seleção do Pagamento
  c.	Na área de pagamento, informar o cliente, comprador, dados do pagamento e clicar no botão “Incluir Pagamento”; este será listado  abaixo do botão “Incluir Pagamento”.
3.	Arquitetura
  a.	FRONT-END (porta 8000)
    i.	Aplicação single page application desenvolvida em React com Bootstrap, utilizando Axios e Webpack.
    ii.	 Validações:
      •	selecionando-se o tipo de pagamento “Boleto”, a aplicação oculta os campos referente a cartão de crédito e gera um número de boleto com 12 dígitos, baseado na data de inclusão somado a um número randômico
      •	caso a inclusão do cliente ou comprador ou pagamento não seja bem sucedida, será exibida uma mensagem de erro
 
  b.	BACK-END (porta 3003)
    i.	Aplicação desenvolvida em Node.js utilizando Express, Mongoose e Node-Restful.
    ii.	Validações na API (paymentValidator.js / payment.js)
      •	Campos obrigatórios: client, buyer, amount, paymentType (aceita somente “Boleto” e “Credit Card”)
      •	Para o tipo de pagamento “Credit Card”, obriga o preenchimento dos campos cardHolderName, cardNumber, cardExpirationDate, cardCVV
      •	Caso o tipo de pagamento seja “Credit Card”, verifica se o buyerName é igual ao cardHolderName.

NOTAS:
- as mensagens de erro foram exibidas corretamente nos testes via Postman, porém não consegui apresentá-las no FRONT-END
- não implementei os testes unitários nem Docker
