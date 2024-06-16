# Projeto - Site de Jogos para Crianças

## Desenvolvedores
- **Mateus Henrique Vidolin**
- **Júlio César Prado de Moraes**

## Trabalho
Desenvolva uma página web com o tema livre, utilizando React. No desenvolvimento da página é obrigatório o uso de props, props.children, router e State Hook em alguma parte do projeto e a página deve conter ao menos 5 componentes React diferentes (O componente App não conta para o cálculo).

## Descrição do Projeto
Foi desenvolvido um site de jogos para crianças. Este projeto implementa uma página web que permite a seleção de diferentes gêneros de jogos, cada um contendo uma lista de jogos disponíveis. O site possui um sistema de autenticação simples baseado na idade do usuário, garantido que apenas usuários com idade igual ou superior a 12 anos possam acessar os jogos.

## Tecnologias Utilizadas
- React
- React Router
- CSS

## Estrutura do Projeto
O projeto é composto pelos seguintes componentes principais:

1. **Login**: Componente que gerencia o login do usuário com verificação da idade.
2. **GenreSelection**: Componente que permite a seleção de um gênero de jogo.
3. **GenreList**: Componente que exibe a lista de jogos para o gênero selecionado.
4. **GameGenre**: Componente que recebe e renderiza os ícones dos jogos de um gênero específico.
5. **GameIcon**: Componente que representa um ícone de jogo individual.
6. **HelpIcon**: Componente que exibe uma explicação sobre o uso de determinados recursos do React ao passar o mouse sobre um ícone de ajuda.

## Funcionalidades Principais
- **Autenticação Simples**: O usuário deve inserir sua idade. Se a idade for igual ou superior a 12 anos, o acesso é concedido.
- **Seleção de Gênero**: O usuário pode selecionar entre diferentes gêneros de jogos (Aventura, Esportes, Puzzle, Estratégia).
- **Lista de Jogos**: Para cada gênero, uma lista de jogos disponíveis é exibida.
- **Ícones de Ajuda**: Explicações sobre o uso de props, props.children, router e State Hook são exibidas ao passar o mouse sobre ícones de ajuda.

## Como Executar o Projeto
Clone o repositório
Instale as dependências com npm install
Inicie o servidor com npm run dev