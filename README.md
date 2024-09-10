# Trabalho de React 2 - TP3

Este projeto é uma coleção de exercícios de React que demonstra a utilização de hooks, formulários, integração com Firebase e consumo de APIs externas. Cada exercício aborda diferentes aspectos da criação de componentes React e manipulação de estado.

## Exercícios

1. **Formulário com `useState`:**
   - Crie uma página com um formulário simples, usando o hook `useState`, que obtenha nome e telefone.

2. **Validação de Campos Obrigatórios:**
   - Crie uma página com o formulário da questão anterior, validando o campo nome e telefone como sendo obrigatórios.

3. **Validação Numérica do Telefone:**
   - Crie uma página com o formulário da questão anterior, validando se o campo telefone é numérico.

4. **Formulário com `useForm` do `react-hook-form`:**
   - Crie uma página com o formulário da questão 1, trocando o hook `useState` por `useForm` do `react-hook-form`.

5. **Validação de Telefone com Regex:**
   - Crie uma página com o formulário da questão anterior, validando com regex o campo telefone, permitindo somente números.

6. **Mostrar Dados como JSON:**
   - Crie uma página com o formulário da questão anterior com uma função que mostre os dados do formulário como um JSON após o submit.

7. **Formulário com `useForm` e Campos Obrigatórios:**
   - Crie uma página com um formulário simples, usando o hook `useForm` e 3 campos obrigatórios: nome, email e telefone.

8. **Validação de Email com Regex:**
   - Crie uma página com o formulário da questão anterior, validando com regex se o email é válido ou não.

9. **Inserir Dados no Firestore:**
   - Crie uma página com o formulário da questão anterior, persistindo os dados no Firestore.

10. **Listar Dados do Firestore:**
    - Crie uma página com o formulário da questão anterior, mostrando os dados gravados no Firestore em uma lista simples.

11. **Substituir Lista Simples por Data Table:**
    - Crie uma página com o exercício anterior, substituindo a lista simples pelo `react-data-table-component` ou equivalente.

12. **Obter Dados por ID:**
    - Crie uma página com o exercício anterior, criando uma função que permita selecionar uma linha da lista e carregar os dados para o formulário.

13. **Excluir Registro:**
    - Crie uma página com o exercício anterior que permita excluir um registro da lista e do Firestore.

14. **Editar Registro:**
    - Crie uma página com o exercício anterior que permita editar um registro da lista e do Firestore.

15. **Formulário de Login com `useForm`:**
    - Crie uma página com um formulário com `useForm` que permita fazer login no Firebase (crie as contas diretamente no Firebase).

16. **Buscar Endereço com CEP:**
    - Crie uma página com um campo onde será possível digitar um CEP e obter o endereço completo - valide o campo. Use o serviço [ViaCEP](https://viacep.com.br/).

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Hook Form**: Biblioteca para manipulação de formulários em React.
- **Firebase**: Plataforma de desenvolvimento de aplicativos móveis e web, utilizada para autenticação e armazenamento de dados.
- **Axios**: Cliente HTTP para fazer requisições à API externa (ViaCEP).
- **React Data Table Component**: Componente para criação de tabelas dinâmicas em React.
