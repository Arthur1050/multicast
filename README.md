# Multicast

Multicast e uma plataforma de streaming social focada em sessoes sincronizadas, presenca em tempo real e controle compartilhado de reproducao.

Este repositorio ainda nao representa a aplicacao final completa. Hoje ele funciona como a base visual e tecnica do produto: um design system dark-first, com showcase interno, primitives reutilizaveis e os primeiros compostos de dominio para fluxos de watch party.

Referencia de posicionamento do produto: https://multicast-sales-page.vercel.app/

## O que existe hoje

- uma vitrine interna em `app/page.tsx` para validar tokens, primitives, overlays e compostos
- fundacao de componentes interativos baseada em `shadcn/ui` + Radix
- identidade visual propria do Multicast por cima dessa base
- documentacao interna em `docs/design-system/` guiando design, comportamento e implementacao

## Visao do produto

O Multicast foi pensado para experiencias de entretenimento compartilhado. A interface precisa deixar claro:

- qual e o estado da sessao
- o que esta sendo reproduzido
- quem esta presente
- quem controla a experiencia
- como a comunicacao contextual acontece sem competir com a midia

Na pratica, isso se traduz em pilares como:

- sincronizacao de playback
- salas privadas ou publicas
- presenca social
- moderacao e permissao de controle
- chat e contexto em tempo real

## Estado atual do repositorio

Este projeto esta na fase de consolidacao da base do sistema.

Ja implementado:

- tokens globais em `app/globals.css`
- tipografia global em `app/layout.tsx`
- primitives em `components/ui/*.tsx`
- wrappers publicos e compostos em `components/*.tsx`
- utilitarios de classe em `lib/cn.ts` e `lib/utils.ts`

Ainda planejado:

- command menu
- pagination
- table
- chat bubble
- queue item
- playback toolbar

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- `shadcn/ui`
- Radix UI
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react`

## Estrutura do projeto

```text
app/
  layout.tsx
  page.tsx
  globals.css
components/
  ui/          # primitives baseados em shadcn/ui + Radix
  *.tsx        # wrappers publicos e compostos de dominio
docs/
  design-system/
lib/
  cn.ts
  utils.ts
```

## Como rodar

### Requisitos

- Node.js 20+ recomendado
- pnpm

### Instalacao

```bash
pnpm install
```

### Ambiente de desenvolvimento

```bash
pnpm dev
```

Abra `http://localhost:3000`.

### Scripts disponiveis

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Como a UI esta organizada

### 1. Foundation

Em `components/ui/*.tsx` ficam os primitives que cuidam de comportamento e acessibilidade:

- button
- input
- textarea
- checkbox
- switch
- select
- dropdown menu
- dialog
- tabs
- tooltip
- avatar
- field

Essa camada existe para evitar inconsistencia de detalhes pequenos como:

- hover
- focus-visible
- active
- selected
- disabled
- feedback de clique
- comportamento de overlays e menus

### 2. API publica do design system

Em `components/*.tsx` ficam:

- wrappers que adaptam a ergonomia do projeto para a base `shadcn/ui`
- primitives consumidos diretamente pela aplicacao
- compostos de dominio como `MediaCard`, `RoomCard`, `ParticipantStrip` e `StatCard`

### 3. Tokens e identidade visual

A aparencia do produto nao vem de estilos ad-hoc em cada componente. Ela vem de tokens semanticos definidos em `app/globals.css`, incluindo:

- cores de background, card, panel e overlay
- cores de estado como primary, success, warning, danger e live
- raio, sombra e tracking tipografico
- gradientes e atmosfera dark-first do produto

## Documentacao interna

Antes de alterar componentes, estilos, layouts ou regras de UX, leia a documentacao em `docs/design-system/`.

Pontos de entrada recomendados:

- `docs/design-system/index.md`
- `docs/design-system/01-foundations/`
- `docs/design-system/02-components/`
- `docs/design-system/03-product-rules/`
- `docs/design-system/04-implementation/`

Arquivos especialmente importantes:

- `docs/design-system/02-components/02-primitives.md`
- `docs/design-system/03-product-rules/01-streaming-domain.md`
- `docs/design-system/03-product-rules/02-states-and-feedback.md`
- `docs/design-system/04-implementation/01-code-architecture.md`

## Regras de desenvolvimento desta base

- use tokens semanticos em vez de hex direto
- novos primitives interativos devem partir de `components/ui/*`
- mantenha componentes stateless por padrao, quando possivel
- preserve a direcao dark-first e cinematica do produto
- trate playback, presenca, moderacao e sincronizacao como preocupacoes de primeira classe

## Regra importante sobre Next.js

Este projeto usa uma versao de Next.js com mudancas relevantes em relacao ao que muita documentacao antiga ensina. Antes de mexer em convencoes do framework, leia o guia apropriado em:

```text
node_modules/next/dist/docs/
```

## Resumo

Se voce abrir este repositorio esperando um produto completo, ainda nao e isso.

Se voce abrir esperando uma fundacao solida para construir o Multicast com consistencia visual, acessibilidade, comportamento previsivel e linguagem propria, e exatamente isso que esta aqui.
