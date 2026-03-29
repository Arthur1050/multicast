# Primitives

## Base tecnica

- primitives interativos devem nascer sobre `shadcn/ui` + Radix
- customizacao visual acontece por tokens semanticos do Multicast, nao por estilos isolados de pagina
- wrappers em `components/*.tsx` podem manter ergonomia local, mas a fundacao de comportamento fica em `components/ui/*`

## Buttons

- `primary`: iniciar, criar, entrar, confirmar
- `secondary`: acao adjacente com peso medio
- `tertiary`: filtros, alternancias e apoio
- `ghost`: navegacao e UI densa
- `danger`: sair, encerrar, remover, excluir

## Inputs

- labels explicitas em fluxos criticos
- helper text orienta contexto
- erro com texto, nao so cor
- foco sempre visivel
- selects nao usam o dropdown nativo do navegador

## Selection Controls

- `Checkbox`: selecao multipla ou confirmacao
- `Switch`: alternancia imediata de estado
- `SegmentedControl`: escolhas exclusivas simples
- `Tabs`: navegacao entre views ou categorias
- hover, active e focus-visible precisam existir por padrao, sem depender da tela consumidora

## Structure

- `Card`: conteudo de produto
- `Surface`: agrupamentos de maior atmosfera ou destaque
- `Separator`: divisao estrutural sutil
- `Badge`: metadata, nunca CTA
