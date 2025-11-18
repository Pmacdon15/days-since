import { AlertTriangle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 text-center relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950 pointer-events-none" />
      
      <div className="z-10 flex flex-col items-center gap-8 animate-in fade-in zoom-in duration-1000">
        <div className="relative">
          <div className="absolute -inset-4 bg-red-500/20 blur-3xl rounded-full animate-pulse-slow" />
          <h1 className="text-[12rem] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-600 drop-shadow-2xl select-none pr-[0.2em] pb-[0.1em]">
            0
          </h1>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-400 uppercase letter-spacing-widest">
            Days Since Last VS Code Fork
          </h2>
          
          <div className="flex items-center justify-center gap-2 text-amber-500/80 font-mono text-sm md:text-base bg-amber-950/30 px-4 py-2 rounded-full border border-amber-900/50 mx-auto w-fit">
            <AlertTriangle className="w-4 h-4" />
            <span>It happened again.</span>
          </div>
        </div>
      </div>
      
    </main>
  );
}
