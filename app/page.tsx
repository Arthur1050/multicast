import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clapperboard, MonitorPlay, Users, MessageSquareText, Settings2, PlayCircle } from "lucide-react";
import { HeroBackground } from "@/components/ui/hero-background";
import { NeonGlassButton } from "@/components/ui/neon-glass-button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Clapperboard className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-linear-to-r from-primary to-purple-400 bg-clip-text text-transparent">
              Multicast
            </span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                Inscrever-se
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 md:py-32 lg:py-40">
          <HeroBackground />
          <div className="container relative z-10 flex flex-col items-center text-center mx-auto px-4 md:px-8 gap-8">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-sm text-primary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              A revolução do cinema virtual chegou
            </div>
            <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Assista Junto. <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
                Não Importa a Distância.
              </span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground">
              Crie suas próprias salas de cinema virtuais. Dê play e assista aos seus conteúdos favoritos em sincronia perfeita com seus amigos, onde quer que eles estejam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <NeonGlassButton href="/register">
                Criar Minha Sala Agora
              </NeonGlassButton>
              <Link href="#features">
                <Button size="lg" variant="outline" className="h-14 px-8 text-base border-primary/20 hover:bg-primary/10">
                  <PlayCircle className="mr-2 h-5 w-5" /> Como funciona
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="relative py-24 bg-muted/30 overflow-hidden">
          {/* Subtle film grain over features too */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />
          <div className="container relative z-10 mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A Experiência Definitiva</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Tudo o que você precisa para curtir a melhor sessão de filmes e séries com a sua galera, sem complicação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="group bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <MonitorPlay className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Sincronização Perfeita</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Nada de perguntar "já começou aí?". O player sincroniza frame a frame para todos os participantes da sala.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Salas Privativas</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Você no controle. Crie salas abertas ao público ou convide apenas os seus melhores amigos com links privados.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <MessageSquareText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Chat ao Vivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Comente cada cena épica em tempo real com o chat integrado. A diversão não para mesmo durante as cenas quietas.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Settings2 className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Controle Compartilhado</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Passe o controle para a roda. Escolha quem pode pausar, avançar ou trocar de conteúdo durante a sessão.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/5"></div>
          {/* Subtle floating glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[150px] pointer-events-none animate-float-slow" />
          <div className="container relative z-10 mx-auto px-4 md:px-8 text-center max-w-3xl flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pronto para a sua primeira sessão?</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Junte-se ao Multicast hoje mesmo e mude a forma como você compartilha entretenimento com as pessoas que você gosta.
            </p>
            <NeonGlassButton href="/register">
              Criar Conta Gratuita
            </NeonGlassButton>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-background">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 opacity-80">
            <Clapperboard className="h-5 w-5" />
            <span className="font-semibold tracking-tight">Multicast</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Multicast. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Termos</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Privacidade</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
