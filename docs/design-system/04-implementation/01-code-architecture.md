# Code Architecture

## Estrutura atual

- `app/globals.css`: tokens, themes e utilities
- `app/layout.tsx`: fontes globais e metadata base
- `components/ui/*.tsx`: primitives baseados em `shadcn/ui` + Radix
- `components/*.tsx`: wrappers publicos e compostos do design system
- `lib/cn.ts` e `lib/utils.ts`: composicao de classes com merge previsivel

## Regras de implementacao

- componentes devem consumir tokens semanticos
- evitar hex direto em classes
- manter components stateless por default
- primitives interativos novos devem partir de `components/ui/*`, nao de HTML cru
- promover compostos de dominio quando primitives comecarem a se repetir em conjunto
- nao recriar um `index.ts` agregador na raiz se a estrutura do projeto nao quiser esse padrao

## Convencoes

- um arquivo por componente
- variantes pequenas e previsiveis
- props com nomes semanticamente claros
