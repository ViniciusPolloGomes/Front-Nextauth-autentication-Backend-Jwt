# FrontEnD autentication JWT 
Essa aplicação é UM exemplo simples de autenticação de usuário usando JWT e uma aplicação backend RESTFULL.
Backend disponivel em : https://github.com/ViniciusPolloGomes/ignite-reactjs-auth-backend

Basta executar as duas simultaneamente usando os comandos no terminal: 

yarn

Depois digite: 

yarn dev

Faça isso para ambos os projetos.

## Usamos a biblioteca nookies
Biblioteca para cookies
Comando de instalação:  yarn add nookies

## JWT-DECODE
yarn add jwt-decode
Decode serve para decodificar um token e pegar conteúdo, lembrando que token é incriptado, e não cripitografado.

## BroadCastChannel
Bibliotéca ótima para manter a sincronia entre as abas e paginas da aplicação, ou seja, se usuário deslogar em uma aba , nas outras também sera deslogado e redirecionado para uma pagina padrão disponivel.

## Configurando ambiente
-Estratégia de autenticação
-Configurando API RESTful

## Autenticação com JWT
-Contexto de autenticação
-Configurando cliente do axios
-Salvando dados do usuário
-Salvando tokens nos cookies
-Recuperando estado da autenticação
-Realizando refresh do token
-Fila de requisições no Axios
-Realizando logout automático

## Autenticação com SSR
-Recuperando token no server-side
-Validando visitante
-Validando autenticação (Server)
-Redirecionamento pelo servidor

## Controle de permissões
-Criando hook de permissão
-Criando componente de permissão
-Validando permissões (Server)
-Broadcast de logout