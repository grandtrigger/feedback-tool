# Feedback Tool

## Montagem do ambiente

O ambiente de desenvolvimento em Angular necessita de algumas ferramentas instaladas na máquina.

- Git
- Node (v10+)

## Instalando Angular CLI

A seguir, baixe o Angular CLI de forma global, para que possa ser executado de qualquer ponto da estrutura de pastas do sistema

```
npm install -g @angular/cli
```

Este comando irá baixar a versão mais atual da ferramenta.

## Clonando este repositório

Em uma pasta do seu agrado, abrir o terminal e executar o seguinte comando:

```
git clone https://github.com/grandtrigger/feedback-tool.git
```

Isto irá baixar o repositório na sua máquina, no caminho /<sua-pasta>/feedback-tool. Logo após, executar

```
cd feedback-tool
```

para acessar a pasta do repositório

## Configurando o projeto clonado

Após clonar e acessar a nova pasta criada, vamos permitir que o código que temos em mãos seja compilado para execução e testes.

```
npm install
```

Isto irá baixar todas as dependências necessárias pelo projeto para que ele seja executável. Com o sucesso desta operação, só nos resta invocar o Angular CLI.

```
ng serve --open
```

Uma janela do navegador padrão irá abrir com o projeto executável.

Bons estudos!
