import { Alert } from "@/components/alert";
import { Avatar } from "@/components/avatar";
import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/card";
import { Checkbox } from "@/components/checkbox";
import {
  DropdownContent,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownSeparator,
  DropdownTrigger,
} from "@/components/dropdown";
import { EmptyState } from "@/components/empty-state";
import { Field } from "@/components/field";
import { Input } from "@/components/input";
import { MediaCard } from "@/components/media-card";
import { Modal } from "@/components/modal";
import { ParticipantStrip } from "@/components/participant-strip";
import { Progress } from "@/components/progress";
import { RoomCard } from "@/components/room-card";
import { SectionHeading } from "@/components/section-heading";
import { Select } from "@/components/select";
import {
  SegmentedControl,
  SegmentedControlItem,
} from "@/components/segmented-control";
import { Separator } from "@/components/separator";
import { StatCard } from "@/components/stat-card";
import { Surface } from "@/components/surface";
import { Switch } from "@/components/switch";
import { TabsList, TabsTrigger } from "@/components/tabs";
import { Textarea } from "@/components/textarea";
import { Tooltip } from "@/components/tooltip";

function Swatch({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <div className="space-y-3">
      <div className={`h-20 rounded-3xl border border-border ${className}`} />
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-8 sm:px-8 lg:px-10">
      <Surface tone="spotlight" className="overflow-hidden">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <Badge tone="live">Design System Showcase</Badge>
            <div className="space-y-4">
              <h1 className="font-display text-balance text-5xl font-semibold sm:text-6xl">
                Multicast UI para streaming social, presenca e controle compartilhado.
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Esta pagina existe apenas como vitrine interna do sistema. Ela mostra tokens,
                primitives, compostos e overlays sem virar ainda uma tela final do produto.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Criar watch party</Button>
              <Button size="lg" variant="secondary">
                Entrar em sala privada
              </Button>
              <Button size="lg" variant="ghost">
                Explorar catalogo
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <StatCard label="Salas ativas" value="184" change="+12%" />
            <StatCard label="Tempo sincronizado" value="92.4h" change="+8.4%" />
            <StatCard label="Convites enviados" value="1.2k" />
            <StatCard label="Sessões ao vivo" value="36" />
          </div>
        </div>
      </Surface>

      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Card tone="panel">
          <CardHeader>
            <CardTitle>Foundations</CardTitle>
            <CardDescription>
              Cor, feedback, densidade e atmosfera baseados na sintese entre Asana, Untitled UI
              e a paleta da sales page.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-3">
            <Swatch label="Primary" className="bg-primary" />
            <Swatch label="Panel" className="bg-panel" />
            <Swatch label="Live" className="bg-live" />
          </CardContent>
          <CardFooter className="justify-between">
            <p className="text-sm text-muted-foreground">
              Dark-first, com light opcional e tokens semanticos.
            </p>
            <Tooltip content="Use hover/focus para interacoes discretas e legiveis.">
              <Button variant="secondary" size="sm">
                Hover me
              </Button>
            </Tooltip>
          </CardFooter>
        </Card>

        <Card tone="interactive">
          <CardHeader>
            <CardTitle>Buttons, badges and selection</CardTitle>
            <CardDescription>
              Primitives de acao e sinalizacao para navegar entre descoberta, sala e playback.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge tone="neutral">Neutral</Badge>
              <Badge tone="primary">Featured</Badge>
              <Badge tone="success">Ready</Badge>
              <Badge tone="warning">Review</Badge>
              <Badge tone="danger">Blocked</Badge>
              <Badge tone="live">Live</Badge>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Checkbox defaultChecked aria-label="Checkbox demo" />
              <Switch checked aria-label="Switch demo" />
              <SegmentedControl>
                <SegmentedControlItem active>Filmes</SegmentedControlItem>
                <SegmentedControlItem>Series</SegmentedControlItem>
                <SegmentedControlItem>Eventos</SegmentedControlItem>
              </SegmentedControl>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Card tone="panel">
          <CardHeader>
            <CardTitle>Forms and controls</CardTitle>
            <CardDescription>Inputs focados em configuracao de sala e descoberta.</CardDescription>
          </CardHeader>
          <CardContent>
            <Field
              label="Nome da sala"
              helperText="Use um titulo curto que ajude o convite a ser aceito rapidamente."
              required
            >
              <Input placeholder="Sessao cyber noir de sexta" />
            </Field>
            <Field label="Visibilidade">
              <Select defaultValue="private">
                <option value="private">Privada com convite</option>
                <option value="public">Publica com codigo</option>
                <option value="community">Comunidade</option>
              </Select>
            </Field>
            <Field label="Instrucoes para convidados">
              <Textarea placeholder="Entrar 5 minutos antes, microfone opcional, sem spoilers no chat." />
            </Field>
            <Field label="Sincronizacao da sessao" helperText="Progresso do preload para todos entrarem juntos.">
              <Progress value={68} />
            </Field>
          </CardContent>
        </Card>

        <Card tone="default">
          <CardHeader>
            <CardTitle>Navigation and overlays</CardTitle>
            <CardDescription>
              Dropdown, tabs, tooltip e modal em uma linguagem consistente com o restante da UI.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <TabsList>
              <TabsTrigger active>Descobrir</TabsTrigger>
              <TabsTrigger>Salas</TabsTrigger>
              <TabsTrigger>Biblioteca</TabsTrigger>
            </TabsList>

            <div className="flex flex-wrap items-center gap-4">
              <DropdownMenu open>
                <DropdownTrigger>Moderacao ▼</DropdownTrigger>
                <DropdownContent>
                  <DropdownLabel>Sala atual</DropdownLabel>
                  <DropdownItem>Fixar convite</DropdownItem>
                  <DropdownItem>Transferir controle</DropdownItem>
                  <DropdownItem>Silenciar chat</DropdownItem>
                  <DropdownSeparator />
                  <DropdownItem className="text-danger">Encerrar sessao</DropdownItem>
                </DropdownContent>
              </DropdownMenu>

              <Tooltip content="Convide pessoas sem perder o controle da reproduçao.">
                <Button variant="secondary">Tooltip</Button>
              </Tooltip>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden rounded-[calc(var(--radius)+12px)] border border-border bg-background/55">
              <Modal
                open
                contained
                title="Convidar para a watch party"
                description="Compartilhe o link ou mova pessoas especificas para o grupo de moderacao."
                footer={
                  <>
                    <Button variant="secondary">Copiar link</Button>
                    <Button>Enviar convite</Button>
                  </>
                }
              >
                <Field label="Buscar pessoa">
                  <Input placeholder="nome, email ou @handle" />
                </Field>
                <Field label="Permissao inicial">
                  <Select defaultValue="viewer">
                    <option value="viewer">Somente assistir</option>
                    <option value="speaker">Assistir e falar</option>
                    <option value="moderator">Moderador</option>
                  </Select>
                </Field>
              </Modal>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <SectionHeading
          eyebrow="Domain Components"
          title="Compostos iniciais para streaming colaborativo"
          description="Ainda nao e a UI final do produto, mas ja e a camada certa para testar linguagem visual em contexto real."
        />
        <div className="grid gap-6 xl:grid-cols-3">
          <MediaCard
            tone="featured"
            title="Blade Runner 2049"
            meta="Sci-fi noir"
            description="Cartaz, metadata e CTA para descoberta sincronizada."
            artwork={<div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_42%),linear-gradient(135deg,_#6d28d9,_#111827_65%)]" />}
          />
          <RoomCard title="Sala do Episodio Final" participants={7} privacy="private" />
          <EmptyState
            title="Nenhuma sala criada ainda"
            description="Crie uma sessao privada para testar sincronizacao, permissao de controle e presenca social."
            action={<Button>Criar primeira sala</Button>}
            icon={<span className="text-xl">+</span>}
          />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <Card tone="interactive">
          <CardHeader>
            <CardTitle>Presence and social layer</CardTitle>
            <CardDescription>
              O produto precisa parecer colaborativo antes mesmo de abrir chat ou player.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <ParticipantStrip
              participants={[
                { initials: "SA", status: "online" },
                { initials: "AR", status: "live" },
                { initials: "MC", status: "online" },
                { initials: "LN", status: "offline" },
              ]}
              overflowCount={12}
            />
            <div className="flex flex-wrap gap-3">
              <Avatar initials="SA" status="online" />
              <Avatar initials="AR" status="live" />
              <Avatar initials="LN" status="offline" />
            </div>
            <Separator />
            <Alert
              tone="live"
              title="Sessao em andamento"
              description="O host acabou de assumir o controle da timeline para resincronizar todo o grupo."
            />
            <Alert
              tone="warning"
              title="Rede instavel"
              description="O chat continua ativo, mas a reproducao pode atrasar alguns segundos."
            />
          </CardContent>
        </Card>

        <Surface>
          <SectionHeading
            eyebrow="Usage Notes"
            title="O que esta sendo testado aqui"
            description="Hierarquia, semantica de estados, densidade, overlays e compostos de dominio no mesmo canvas."
          />
          <div className="mt-6 grid gap-4 text-sm text-muted-foreground">
            <p>Buttons e badges para acao e estado.</p>
            <p>Forms para criacao e moderacao de salas.</p>
            <p>Overlays para convite, moderacao e contexto de presenca.</p>
            <p>Compostos de dominio para catalogo, room discovery e social proof.</p>
          </div>
        </Surface>
      </section>
    </main>
  );
}
