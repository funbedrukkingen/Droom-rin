import { ArrowDown, ArrowUpRight, Droplets, HandHeart, Leaf, Sprout, UsersRound } from 'lucide-react'

const sections = [
  {
    icon: UsersRound,
    title: 'coöperatie',
    text: 'Ze vormen een coöperatie en groeien samen met je project. Het land krijgt rechtskracht: het kan niet zomaar uit elkaar getrokken worden, kan niet verdwijnen in juridische geschillen of leegstand. Het wordt wat jij ervan droomt—en blijft dat.',
  },
  {
    icon: Sprout,
    title: 'voedseltuinen',
    text: 'De voedseltuinen, de werkplaatsen, de leerruimtes—dit zijn jouw initiatieven, nu gedragen door handen die geloven in wat jij ziet. De winst hiervan steunt jou en het project, zodat het kan ademen en groeien.',
  },
  {
    icon: Droplets,
    title: 'heelt het land',
    text: 'En terwijl dit alles leeft, heelt het land zelf. Water wordt vastgehouden, aarde wordt vruchtbaar opnieuw, mensen ontdekken wat ze kunnen.',
  },
]

export default function Page() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[720px] bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,53,41,.95)_0%,rgba(17,53,41,.68)_48%,rgba(17,53,41,.18)_100%),url('https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col px-6 py-8 lg:px-12">
          <nav className="flex items-center justify-between border-b border-primary-foreground/20 pb-6">
            <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase">
              <span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground"><Leaf size={18} /></span>
              Erfenis
            </a>
            <a href="#verlangen" className="hidden text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground sm:block">Een levende toekomst <ArrowUpRight className="ml-1 inline" size={16} /></a>
          </nav>
          <div id="top" className="flex flex-1 items-center py-20 lg:w-3/5 lg:py-28">
            <div>
              <p className="mb-7 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] text-accent uppercase"><span className="h-px w-12 bg-accent" /> Een plek die blijft</p>
              <h1 className="max-w-3xl text-balance font-serif text-6xl leading-[.98] tracking-[-.04em] sm:text-7xl lg:text-8xl">Jouw Droom: Een Plek Die Leeft en Groeit</h1>
              <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-primary-foreground/80 sm:text-xl">Misschien heb je al jaren deze visie: een plek waar niet alleen jij je voelsprieten uitslaat, maar waar je kinderen, kleinkinderen en hun nakomelingen voelen dat dit thuis is. Niet omdat ze het moeten, maar omdat het werkt.</p>
              <a href="#verlangen" className="mt-10 inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-1">Lees het verhaal <ArrowDown size={17} /></a>
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-primary-foreground/20 pt-5 text-xs text-primary-foreground/60"><span>Land als thuis</span><span>01 — 05</span></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[.8fr_1.2fr] lg:px-12 lg:py-32">
        <div>
          <p className="mb-5 text-xs font-bold tracking-[0.22em] text-accent-foreground uppercase">De eerste keuze</p>
          <h2 className="max-w-md font-serif text-4xl leading-tight tracking-[-.03em] text-primary sm:text-5xl">Een droom wordt sterker wanneer hij gedeeld wordt.</h2>
        </div>
        <div className="max-w-2xl text-lg leading-8 text-muted-foreground">
          <p>Dat begint met één keuze: jouw project verankeren zodat het niet verzwakt als jij er niet meer bent.</p>
          <p className="mt-7">Je blijft eigenaar van je droom. Maar in plaats van het alleen vol te houden, deel je de last—en de schoonheid—met mensen die ernaar verlangen dit samen op te bouwen. Niet als werknemers of huurders, maar als gelijken die dezelfde toekomst willen.</p>
        </div>
      </section>

      <section className="bg-secondary/60 px-6 py-20 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-bold tracking-[0.22em] text-accent-foreground uppercase">Samen dragen</p><h2 className="max-w-xl font-serif text-4xl leading-tight tracking-[-.03em] text-primary sm:text-5xl">Wat groeit als mensen geloven in wat jij ziet.</h2></div><HandHeart className="text-accent-foreground" size={42} strokeWidth={1.2} /></div>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
            {sections.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-8 lg:p-10"><div className="mb-16 flex size-12 items-center justify-center rounded-full bg-secondary text-accent-foreground"><Icon size={22} strokeWidth={1.7} /></div><h3 className="font-serif text-3xl text-primary">{title}</h3><p className="mt-5 text-base leading-7 text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-32">
        <div className="relative min-h-[460px] overflow-hidden rounded-2xl bg-secondary"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=85')] bg-cover bg-center" /><div className="absolute bottom-5 left-5 rounded-lg bg-background/90 px-4 py-3 text-xs font-medium tracking-wide text-primary">Een toekomst die betekenis heeft</div></div>
        <div><p className="mb-6 text-xs font-bold tracking-[0.22em] text-accent-foreground uppercase">Een levend erfgoed</p><blockquote className="border-l-2 border-accent pl-7 font-serif text-4xl leading-tight tracking-[-.025em] text-primary sm:text-5xl">“Jij ontvangt wat je eerlijk toekomt, jaar na jaar.”</blockquote><p className="mt-8 text-lg leading-8 text-muted-foreground">Niet als onpersoonlijke huurbetaling, maar als vruchten van iets wat samen groeit. Terwijl jij je kunt richten op wat je echt wilt doen: je visie vormgeven, anderen inspireren, het hart ervan blijven.</p></div>
      </section>

      <section className="bg-primary px-6 py-24 text-primary-foreground lg:px-12 lg:py-32"><div className="mx-auto max-w-4xl text-center"><p className="mb-8 text-xs font-bold tracking-[0.22em] text-accent uppercase">De kracht van samen</p><p className="font-serif text-3xl leading-tight sm:text-5xl">Die kleine gemeenschappen die ontstaan—clusters van families die echt samenleven—die zijn niet random. Zij zoeken jouw plek juist óm wat jij ervan maakt. Ze zien waar jij naar streeft en willen dat vergroten. Niet omgekeerd.</p><p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-primary-foreground/70">Jouw kleinkinderen groeien op in iets dat betekenis heeft. Dat voelt anders.</p></div></section>

      <section id="verlangen" className="bg-accent px-6 py-24 text-accent-foreground lg:px-12 lg:py-32"><div className="mx-auto max-w-7xl"><div className="grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-end"><div><p className="mb-5 text-xs font-bold tracking-[0.22em] uppercase">Een uitnodiging</p><h2 className="max-w-3xl font-serif text-6xl leading-[.98] tracking-[-.045em] sm:text-8xl">Herken je dit verlangen?</h2></div><div><p className="text-lg leading-8">Dit is wat een erfenis werkelijk kan zijn: niet een last die je doorgeeft, maar iets levends. Jouw toekomst, samen vormgegeven.</p><a href="mailto:contact@example.com" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-1">Neem contact op <ArrowUpRight size={17} /></a></div></div><div className="mt-20 flex justify-between border-t border-accent-foreground/25 pt-5 text-xs font-medium uppercase tracking-[0.16em]"><span>Erfenis in beweging</span><span>© 2026</span></div></div></section>
    </main>
  )
}
