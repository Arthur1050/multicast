# Code Architecture

## Estrutura atual

- `app/globals.css`: tokens, themes e utilities
- `app/layout.tsx`: fontes globais e metadata base
- `components/*.tsx`: biblioteca do design system
- `lib/cn.ts`: utilitario de composicao de classes

## Regras de implementacao

- componentes devem consumir tokens semanticos
- evitar hex direto em classes
- manter components stateless por default
- promover compostos de dominio quando primitives comecarem a se repetir em conjunto
- nao recriar um `index.ts` agregador na raiz se a estrutura do projeto nao quiser esse padrao

## Convencoes

- um arquivo por componente
- variantes pequenas e previsiveis
- props com nomes semanticamente claros
