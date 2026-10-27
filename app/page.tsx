import { ArrowUpRight, AudioLines, Code2 } from "lucide-react";
import { Detector } from "@/components/detector";
import { ThemeToggle } from "@/components/theme-toggle";

const REPO = "https://github.com/modulate-ai/deepfake-detection-starter";
const DEPLOY = `https://vercel.com/new/clone?repository-url=${encodeURIComponent(REPO)}&env=VELMA_API_KEY&envDescription=${encodeURIComponent("Your Modulate Velma API key")}&envLink=${encodeURIComponent("https://platform.modulate.ai/signin")}`;

const link = "inline-flex items-center gap-1 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-5">
          <span className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="grid size-6 place-items-center rounded-md bg-primary text-primary-foreground"><AudioLines className="size-3.5" /></span>
            Velma Detect
          </span>
          <div className="flex items-center gap-1">
            <a className="hidden h-8 items-center gap-1.5 rounded-lg px-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex" href="https://docs.modulate.ai/get-started/deepfake?utm_source=github&utm_medium=repo&utm_campaign=infrasity_m1_repo2" target="_blank" rel="noreferrer">Docs <ArrowUpRight className="size-3.5" /></a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-5 pb-10">
        <section className="mx-auto max-w-2xl pb-8 pt-12 sm:pt-16">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Voice authenticity check</h1>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Upload or record a short clip and see how Velma Deepfake Detection scores each four second window.
          </p>
        </section>

        <Detector />
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground">
          <p>Demo only. Scores are estimates and are not proof. Your key stays on the server and audio is not stored by this app.</p>
          <nav className="flex items-center gap-x-5" aria-label="Footer">
            <a className={link} href={REPO} target="_blank" rel="noreferrer"><Code2 className="size-3.5" /> GitHub</a>
            <a className={link} href={DEPLOY} target="_blank" rel="noreferrer">Deploy <ArrowUpRight className="size-3.5" /></a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
