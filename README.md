# Boas vindas ao repositório do projeto Trybe Wallet!

## Um pouco sobre minhas motivações

Esse projeto teve como objetivo o de aprofundar conhecimentos em reactJs, Redux e Css, foi especial pois foi desenvolvido em um momento onde pude aprofundar meus conhecimentos de javascript porque utilizei várias *features* de javascript 6 , também conhecido como *ES6*, que envolveram as *higher order functions*, *spread operator*, além de consumir uma API externa com o fetch e também aprendi muito, de forma prática sobre o funcionamento do Redux e Redux thunk dentro do ReactJs.

Além de questões técnicas eu gosto de usar aplicativos para controle de gastos e também invisto no mercado de criptomoedas, ambas as coisas estão dentro do projeto, então o projeto foi muito proveitoso para mim.

## O que é o Trybe Wallet?
É uma aplicação onde é possível:

- Criar um usuário personalizado para armazenar dados pessoais de despesas
 - Registrar gastos e categorizá-los.
 - Criar, Ler, Editar e Apagar esses gastos de maneira rápida.
 - Fazer conversão de câmbio para reais de mais de 20 moedas e as principais criptomoedas.
 
## Habilidades desenvolvidas durante o projeto

  * Criar um store Redux em aplicações React

  * Criar reducers no Redux em aplicações React

  * Criar actions no Redux em aplicações React

  * Criar dispatchers no Redux em aplicações React

  * Conectar Redux aos componentes React

  * Criar actions assíncronas na sua aplicação React que faz uso de Redux.

---
 
## Preview do projeto

![trybewallet](https://user-images.githubusercontent.com/72472530/139750451-9d798886-8577-4357-a6a6-f233d8ef8d08.gif)

### Etapas do desenvolvimento desse projeto

Cada tela contém subrequisitos, caso queira conhecer é só clicar em cima dos nomes que uma lista irá se expandir contendo os detalhes do desenvolvimento de cada parte desse projeto.

<details>
    <summary>Página de Login</summary>
    
Crie uma página para que a pessoa usuária se identifique, com email e senha. Esta página deve ser a página inicial de seu aplicativo.

**Requisito 1. Crie uma página inicial de login com os seguintes campos e características:**
  * A rota para esta página deve ser ‘/’.
  * Crie um botão com o texto ‘Entrar’.
  * Realize as seguintes verificações nos campos de email e senha, de modo que caso sejam falsas o botão fique desabilitado:
   * O email está no formato válido, como 'alguem@alguem.com'.
   * A senha possui 6 ou mais caracteres.
  * Salve o email no estado da aplicação, com a chave ***email***, assim que a pessoa usuária logar.
  * A rota deve ser mudada para '/carteira' após o clique no botão '**Entrar**'.
</details>

<details>
    <summary>Página da Carteira</summary>

Crie uma página para gerenciar a carteira de gastos em diversas moedas, e que traga a despesa total em uma moeda só. Esta página deve ser renderizada por um componente chamado ***Wallet***.


**Requisito 2. Crie uma página para sua carteira com as seguintes características:**

  * A rota para esta página deve ser `/carteira`
  * O componente deve se chamar Wallet e estar localizado na pasta `src/pages` no arquivo `Wallet.js`
</details>

<details>
    <summary>Header</summary>

**Requisito 3. Crie um header para a página de carteira contendo as seguintes características:**

  * Um elemento que exiba o email da pessoa usuária que fez login.
  * Um campo com a despesa total gerada pela lista de gastos.
  * Inicialmente esse campo deve exibir o valor `0`
  * Um campo que mostre qual câmbio está sendo utilizado, que será neste caso será 'BRL'.
 </details>

<details>
    <summary>Página da Carteira</summary>
    ### Formulário de adição de Despesa

**Requisito 4. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:**

  * Um campo para adicionar valor da despesa.
  * Um campo para adicionar a descrição da despesa.
  * Um campo para adicionar em qual moeda será registrada a despesa.
   * Este campo deve ser um dropdown. a pessoa usuária deve poder escolher entre os campos: 'USD', 'CAD', 'EUR', 'GBP', 'ARS', 'BTC', 'LTC', 'JPY', 'CHF', 'AUD', 'CNY', 'ILS', 'ETH' e 'XRP'.
    * Os valores do campo de moedas devem ser puxados através da requisição à API.
     * O endpoint utilizado deve ser: https://economia.awesomeapi.com.br/json/all .
    * Remova das informações trazidas pela API a opção 'USDT' (Dólar Turismo). 
	* Um campo para adicionar qual método de pagamento será utilizado.
    * Este campo deve ser um dropdown. A pessoa usuária deve poder escolher entre os campos: 'Dinheiro', 'Cartão de crédito' e 'Cartão de débito'.
  * Um campo para selecionar uma categoria (tag) para a despesa.
  * Este campo deve ser um dropdown. a pessoa usuária deve poder escolher entre os campos: 'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde'.
  * Ao ser clicado, o botão deve fazer uma requisição à API para trazer o câmbio mais atualizado possível.
  * Um botão com o texto \'Adicionar despesa\' que salva as informações da despesa no estado global e atualiza a soma de despesas no header.
    * Desenvolva a funcionalidade do botão "Adicionar despesa" de modo que ao clicar no botão, as seguintes ações sejam executadas:
    * Os valores dos campos devem ser salvos no estado da aplicação, na chave ***expenses***, dentro de um array contendo todos gastos que serão adicionados:
      * O `id` da despesa **deve** ser um número sequencial, começando em 0. Ou seja: a primeira despesa terá id 0, a segunda terá id 1, a terceira id 2, e assim por diante.
</details>

<details>
    <summary> Tabela de Gastos</summary>
   **Requisito 5. Desenvolva uma tabela com os gastos contendo as seguintes características:**
  
  * A tabela deve possuir um cabeçalho **exatamente** com os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido, Moeda de conversão e Editar/Excluir
  * A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave ***expenses*** que vem do reducer `wallet`.
    * O campo de Moeda e Moeda de Conversão deverão conter o nome da moeda. Portanto, ao invés de 'USD' ou 'EUR', deve conter "Dólar Comercial" e "Euro", respectivamente
    * Por padrão, o campo 'Moeda de conversão' exibirá 'Real'
    * Atenção também às casas decimais dos campos. Como são valores contábeis, eles devem apresentar duas casas após a vírgula. Arredonde sua resposta somente na hora de renderizar o resultado, e para os cálculos utilize sempre os valores vindos da API (utilize o campo `ask` que vem da API).
   
**Requisito 6. Crie um botão para deletar uma despesa da tabela contendo as seguintes características**:
  
   * Ao ser clicado, o botão deleta a linha da tabela, alterando o estado global.

**Requisito 7. Crie um botão para editar uma despesa da tabela contendo as seguintes características:**
  
  * Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa" ela é atualizada, alterando o estado global.
    * O botão para submeter a despesa para edição deverá conter **exatamente** o texto "Editar despesa"
 </details>



### Quer instalar esse projeto em seu notebook ou pc?

Para executar o projeto sua máquina deve satisfazer os requisitos abaixo.

**1. Pré-requisitos**
```
- node v16.8.0

- npm 7.21.0

- git version 2.17.1
```

[Download node js](https://nodejs.org/en/)
 

[Download git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

  

**2. Clonando o projeto**

  

Digite o comando abaixo em seu terminal para clonar o projeto.
  

```
git clone https://github.com/TiagoEmanuel8/trybewallet.git
```

  

Entre na pasta

  

```
cd trybewallet
```

  

**3. Instalando as dependências**

  

```
npm install
```

  

**4. Executando o projeto**

  

```
npm start
```

---------




## Referências

O projeto foi feito durante o módulo de Front End do curso da trybe

A aplicação consumiu essa [API](https://economia.awesomeapi.com.br/json/all) para consultar o câmbio das moedas






