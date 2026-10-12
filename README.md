# CineApp — Catálogo de Filmes

**Aluno:** Miguel Santos Pereira
**RA:** 2991392513004
**Disciplina:** Programação para Dispositivos Móveis I — Fatec Registro

## Descrição

O CineApp é um aplicativo mobile feito com React Native + Expo para descobrir filmes, ver os detalhes de cada um e marcar os favoritos.

## Telas

- **Início:** nome, logotipo, descrição e botão para acessar o catálogo.
- **Catálogo:** lista de 6 filmes (título, imagem, gênero e ano) com botão de favorito.
- **Detalhes:** informações do filme selecionado e botão para voltar.
- **Sobre:** informações do aplicativo e botão para voltar ao catálogo.

## Como executar

```bash
npm install
npx expo start
```

Depois, abra o app no celular com o Expo Go (lendo o QR Code) ou em um emulador.

## Estrutura

```
app/
├── _layout.tsx
├── index.tsx
├── catalogo.tsx
├── detalhes.tsx
└── sobre.tsx
components/
├── FilmeCard.tsx
└── Botao.tsx
```