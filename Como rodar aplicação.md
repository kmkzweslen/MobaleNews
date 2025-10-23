# MobaleNews

Aplicativo de notícias desenvolvido com React Native e Expo, com filtros de categoria e data, busca em tempo real e exibição de notícias.

---

## Como rodar o projeto localmente

Siga os passos abaixo para clonar o repositório, instalar as dependências e iniciar o app:

git clone https://github.com/kmkzweslen/MobaleNews.git
cd MobaleNews
npm install
npx expo start
---

## Funcionalidades principais

- Busca instantânea de notícias por título ou categoria.
- Filtros de notícias por categoria e por período (data).
- Exibição das notícias com imagem, título, resumo e data.
- Interface simples, limpa e responsiva para dispositivos móveis.

---

## Estrutura do Projeto

- `/src/components` - Componentes reutilizáveis como SearchBar, CategoryFilter, DateFilter, Header, NewsItem.
- `/src/screens` - Telas do aplicativo, atualmente com `HomeScreen`.
- `/src/data` - Arquivo `news.json` com dados simulados de notícias.
- Outros arquivos de configuração e inicialização do Expo.

---

## Dependências

- React Native
- Expo
- Outras listadas no `package.json`

---
