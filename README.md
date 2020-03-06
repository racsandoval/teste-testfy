# Teste Software Enginner - Testfy

## Enunciado
Este pequeno teste tem como propósito disponibilizar um arquivo pdf gerado dinamicamente através de algumas informações fornecidas por um usuário.
Você deve considerar que o arquivo pdf gerado esteja num tamanho A4 para uma possível impressão.

Requisitos
Para isto, você deverá construir uma API que terá uma única rota.
Nesta rota, serão passados os seguintes parâmetros:
- Nome do usuário
- Data de nascimento
- Telefone
Com os dados fornecidos, será gerado um arquivo pdf que contém apenas o texto desses 3 parâmetros passados. A ideia é só exibir essas informações no documento, o layout não será avaliado aqui.
A resposta dessa rota deve conter o arquivo pdf para download
O projeto deve ter um README.md com as instruções sobre como executar e utilizar a API

Restrições
O serviço deve ser escrito em Node.js
Não será utilizado nenhum banco de dados

## Instalação

``` 
    npm i
    npm start
```

## Utilização

O projeto se encontra na porta 3000, mas isso pode ser modificado no arquivo ```index.js``` em sua pasta raiz.

A API possui a rota ```/api/pdf``` e pode ser utilizada localmente pela url ```http://localhost:3000/api/pdf```
Foram feitas duas formas de fazer download do arquivo:
    --- Utilizando o formulário no browser.
    --- Utilizando alguma plataforma ou programa, como Postman, para acessar a url.
    
### Formulário

Para acessar o formulário basta abrir no browser a url ```http://localhost:3000/```. Nesta página há um formulário com os três campos pedidos, bastá prenchê-los e enviar. Um AJAX será feito pra API que retornará o arquivo PDF, que automaticamente será baixado com o nome do usuário.

### Postman

Basta realizar um request de método ```POST``` para a url ```http://localhost:3000/api/pdf``` enviando um JSON no body com os parametros ```user```, ```phone``` e ```date```, como no exemplo:
```
{
	"user": "douglas",
	"phone": "(11) 9999-9999",
	"date": "11/03/1975"
}
```
A resposta será o arquivo para download, que pode ser baixado clicando no botão ```Download``` no menu inferior de opções.

### Arquivos

Os arquivos são salvos na pasta ```pdf/files``` com o nome do usúario.