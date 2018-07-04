# MoipChallenge
Moip Technical Challenge (Cristina Minami)
1.	Para instalar a aplicação:
  - Instalar o banco de dados MongoDB (HTTP://www.mongodb.com) e criar a pasta “c:\data\db”
  - Instalar o Node.js (https://nodejs.org/en/) 
  - Baixar a aplicação do github (https://github.com/minamicr) , repositório “MoipChallenge”
  - Abrir o shell do sistema operacional e executar o comando “mongod” para inicializar o servidor de banco de dados
  - Abrir outra tela do shell, acessar a pasta “frontend” e executar os comandos “npm  install” e em seguida “npm run dev”
  - Executar o mesmo processo acima, porém acessando a pasta “backend”

2.	Para executar a aplicação:
  - Abrir o browser e acessar a URL HTTP://localhost:8000
  - Incluir o cliente ou comprador para que estes sejam listados nas caixas de seleção do Pagamento
  - Na área de pagamento, informar o cliente, comprador, dados do pagamento e clicar no botão “Incluir Pagamento”; este será listado  abaixo do botão “Incluir Pagamento”.

3.	Arquitetura
  - FRONT-END (porta 8000)
    - Aplicação single page application desenvolvida em React com Bootstrap, utilizando Axios e Webpack.
    - Validações:
        - selecionando-se o tipo de pagamento “Boleto”, a aplicação oculta os campos referente a cartão de crédito e gera um número de boleto com 12 dígitos, baseado na data de inclusão somado a um número randômico
        - caso a inclusão do cliente ou comprador ou pagamento não seja bem sucedida, será exibida uma mensagem de erro
 
  - BACK-END (porta 3003)
    - Aplicação desenvolvida em Node.js utilizando Express, Mongoose e Node-Restful.
    - Validações na API (paymentValidator.js / payment.js):
        - campos obrigatórios: client, buyer, amount, paymentType (aceita somente “Boleto” e “Credit Card”)
        - para o tipo de pagamento “Credit Card”, obriga o preenchimento dos campos cardHolderName, cardNumber, cardExpirationDate, cardCVV
        - caso o tipo de pagamento seja “Credit Card”, verifica se o buyerName é igual ao cardHolderName

NOTAS:
- as mensagens de erro foram exibidas corretamente nos testes via Postman, porém não consegui apresentá-las no FRONT-END
- não implementei os testes unitários nem Docker
