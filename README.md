# OrangeHRM Site - QA Project

### Introdução
Este é um projeto de estudo de QA (Garantia de Qualidade) para o site open-source OrangeHRM. O objetivo deste projeto é documentar os requisitos de negócio, criar cenários de teste em linguagem Gherkin e implementar testes manuais e automatizados para as páginas de Login e "My Info" > "Personal Details".

### Documentação de Requisitos e Cenários de Testes
A primeira etapa do projeto foi a documentação dos requisitos de negócio. Utilizei o Jira para definir os requisitos para as páginas de login e "My Info" > "Personal Details". Após essa etapa inicial, criei os cenários de teste em linguagem Gherkin, também registrados no Jira.

Para facilitar a gestão e a publicação desses artefatos, transferi os requisitos e cenários de testes para o Capacities e o Excel. Assim, pude gerar um arquivo PDF para ser disponibilizado no repositório do projeto no GitHub. Essa documentação serve como base para os testes manuais e automatizados que serão apresentados a seguir.

### Realização dos Testes Manuais
Após a documentação dos requisitos e cenários de testes, parti para a execução dos testes manuais. Esses testes foram essenciais para validar o funcionamento da aplicação de acordo com os requisitos levantados. Todos os casos de teste manuais foram registrados e seus resultados documentados para referência futura.

### Automação de Testes E2E
Foram implementados testes automatizados para as páginas de "Login" e "My Info" > "Personal Details". Usando a ferramenta de testes Cypress is a JavaScript-based. Esses testes E2E (End-to-End) têm como objetivo garantir a cobertura das funcionalidades críticas do sistema, como o fluxo de login e a atualização dos dados pessoais na página "My Info" > "Personal Details". Essa automatização permite executar os testes de forma rápida e confiável, identificando possíveis regressões ao longo do desenvolvimento do site.

### Estrutura do Projeto
O projeto de QA para o site OrangeHRM está organizado da seguinte forma:

- No diretório tests/features, encontram-se os cenários de teste em linguagem Gherkin.
- O diretório docs contém a documentação do projeto, incluindo o manual de testes e a apresentação em PDF.
- Os scripts de teste automatizados estão localizados no diretório tests/automation.

Todos esses artefatos, juntamente com o arquivo PDF contendo os requisitos e cenários de testes, estão disponíveis no repositório do projeto no GitHub.

## Installation
```bash
npm install
```
> **NOTE: **
>
> It is necessary to have **node** installed

##Running
```bash
#You open the Cypress UI
npx cypress open

# Run the automation by command line
npx cypress run
``` 

### Conclusão
O  projeto de QA para o site OrangeHRM demonstra a importância de uma abordagem estruturada e documentada para garantir a qualidade de uma aplicação. A definição clara dos requisitos, a criação de cenários de teste e a implementação de testes manuais e automatizados são fundamentais para identificar e corrigir problemas antes da entrega do software.
Espero que este repositório tenha te ajudado a entender o escopo e a relevância deste projeto de QA. Fique à vontade para entrar em contato caso tenha alguma dúvida ou precise de mais informações.
