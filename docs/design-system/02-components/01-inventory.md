# Component Inventory

## Leitura importante

As referencias de Asana e Untitled UI documentam sistemas enormes, com centenas de familias e milhares de variantes. O Multicast nao precisava copiar esse volume agora, mas a primeira entrega realmente estava curta demais. Isso foi corrigido com uma biblioteca inicial mais ampla e melhor distribuida entre primitives e compostos de dominio.

## Componentes implementados

### Foundation

- `components/ui/*` como camada-base `shadcn/ui` + Radix, customizada com tokens do Multicast
- `components/*.tsx` como API publica da biblioteca e wrappers de compatibilidade para primitives e compostos

### Primitives

- `Button`
- `Badge`
- `Input`
- `Textarea`
- `Field`
- `Avatar`
- `Alert`
- `Checkbox`
- `Switch`
- `Progress`
- `Separator`
- `DropdownMenu`
- `DropdownTrigger`
- `DropdownContent`
- `DropdownItem`
- `Select`
- `Modal`
- `Tooltip`
- `TabsList`
- `TabsTrigger`
- `SegmentedControl`
- `SegmentedControlItem`
- `Card`
- `Surface`
- `SectionHeading`

### Compostos iniciais

- `EmptyState`
- `StatCard`
- `MediaCard`
- `RoomCard`
- `ParticipantStrip`

## O que ainda nao foi implementado

- command menu
- pagination
- table
- chat bubble
- queue item
- playback toolbar

## Regra de expansao

Novos componentes devem nascer em uma destas classes:

- primitive
- composed generic
- streaming-specific
