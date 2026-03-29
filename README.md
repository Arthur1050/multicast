# 🎬 Multicast

> **Assista junto. Nao importa a distancia.**

Multicast e uma experiencia de streaming social criada para transformar uma simples sessao de filme, serie ou evento em algo compartilhado, sincronizado e vivo.

Aqui, assistir nao e uma atividade solitaria.  
E cinema virtual com amigos, salas privadas, presenca em tempo real, controle compartilhado e uma interface pensada para fazer a experiencia parecer especial desde o primeiro clique.

## ✨ A proposta

O Multicast nasce da ideia de que entretenimento fica melhor quando e vivido em grupo.

Em vez de:

- mandar mensagem perguntando "deu play?"
- tentar sincronizar manualmente
- perder o contexto de quem entrou, saiu ou pausou
- dividir a atencao entre varias ferramentas

o Multicast concentra tudo em uma experiencia so:

- 🎞️ reproducao sincronizada
- 🫂 presenca social visivel
- 🔐 salas privadas ou publicas
- 🎛️ controle compartilhado
- 💬 comunicacao contextual em tempo real

## 🚀 O que este repositorio representa

Este repositorio ainda nao e a aplicacao final completa do produto.

Hoje ele funciona como a **base visual e tecnica do Multicast**:

- uma vitrine interna do design system
- a fundacao dos componentes da plataforma
- os primeiros blocos de interface para fluxos de watch party
- a linguagem visual que vai sustentar as futuras telas reais do produto

Em outras palavras: este projeto e o alicerce da experiencia.

## 🌌 Direcao visual

O Multicast segue uma direcao **dark-first, cinematica e imersiva**.

A interface foi desenhada para equilibrar:

- clareza de produto
- atmosfera emocional
- densidade de informacao
- consistencia de comportamento

Nao e apenas um conjunto de componentes bonitos.  
A intencao aqui e construir uma interface que pareca, ao mesmo tempo:

- premium
- viva
- social
- controlada
- pronta para playback, moderacao e presenca

## 🧩 O que voce encontra aqui

### Primitives da interface

A base atual ja cobre componentes essenciais como:

- buttons
- inputs
- textarea
- select
- switch
- checkbox
- tabs
- dropdowns
- tooltip
- modal
- avatar
- field

### Componentes de dominio inicial

Tambem ja existem compostos pensados para o universo do produto:

- `MediaCard`
- `RoomCard`
- `ParticipantStrip`
- `StatCard`
- `EmptyState`

Esses componentes ajudam a validar a linguagem do Multicast em cenarios mais proximos do uso real.

## 💡 Diferenciais da base atual

Mesmo sendo uma base em evolucao, este projeto ja foi estruturado para evitar os problemas classicos de interfaces inconsistentes:

- hover e focus previsiveis
- feedback visual de clique
- estados mais robustos
- overlays e menus mais consistentes
- primitives interativos apoiados em `shadcn/ui` + Radix
- identidade visual propria aplicada por tokens semanticos

Ou seja: a fundacao foi pensada para escalar sem virar um conjunto de excecoes visuais.

## 🛣️ Para onde isso vai

Os proximos passos naturais do projeto incluem levar essa base para fluxos reais como:

- autenticacao
- lobby
- descoberta de conteudo
- salas sincronizadas
- moderacao
- billing

Tambem faz parte do caminho expandir componentes como:

- chat bubble
- queue item
- playback toolbar
- command menu
- tabelas e estruturas de apoio

## 🖼️ Posicionamento do produto

Se quiser ver a linguagem mais comercial da ideia, a sales page esta aqui:

👉 https://multicast-sales-page.vercel.app/

## 🧪 Rodando localmente

Se voce quiser explorar a base no seu ambiente:

### Requisitos

- Node.js 20+
- pnpm

### Instalacao

```bash
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
```

Depois abra:

```text
http://localhost:3000
```

## 📚 Documentacao interna

As regras de design e implementacao ficam em:

```text
docs/design-system/
```

Pontos de entrada mais importantes:

- `docs/design-system/index.md`
- `docs/design-system/02-components/02-primitives.md`
- `docs/design-system/03-product-rules/01-streaming-domain.md`
- `docs/design-system/03-product-rules/02-states-and-feedback.md`
- `docs/design-system/04-implementation/01-code-architecture.md`

## 🛠️ Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Radix UI

## ❤️ Em resumo

O Multicast nao quer ser apenas mais uma interface para assistir conteudo.

Ele quer fazer o ato de assistir junto parecer:

- mais simples
- mais bonito
- mais sincronizado
- mais social
- mais memoravel

Este repositorio e o primeiro passo concreto nessa direcao.
