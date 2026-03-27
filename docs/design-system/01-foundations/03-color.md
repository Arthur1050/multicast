# Color

## Origem da paleta

A paleta base foi adaptada do `globals.css` da sales page do Multicast e convertida para tokens semanticos no `app/globals.css`.

## Tokens centrais

- `background`: canvas principal
- `card`: superficie base de cards
- `panel`: blocos mais densos, drawers e agrupamentos
- `popover`: overlays leves
- `primary`: CTA, foco, selecao
- `secondary`: apoio, filtros e agrupamentos
- `accent`: realce atmosferico
- `live`: transmissao, gravacao, sessao ativa
- `success`, `warning`, `danger`: feedback semantico
- `border`, `border-strong`, `input`, `ring`, `overlay`: infraestrutura

## Regras de uso

- usar tokens semanticos em vez de hex direto
- reservar `primary` para acao, foco e selecao
- `live` so deve aparecer quando houver urgencia temporal ou transmissao real
- `danger` e `warning` nunca substituem copy clara
- blocos inteiros em `primary` sao excecao, nao regra

## Temas

- dark-first por padrao
- suporte a `.light`
- ambos devem preservar contraste e hierarquia
