import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { MapPin, Phone, Calendar, Heart, Share2, Sparkles } from "lucide-react";
import ganesha from "@/assets/ganesha.png";
import bgTexture from "@/assets/bg-texture.jpg";
import bridePhoto from "@/assets/bride.webp.asset.json";
import groomPhoto from "@/assets/groom.webp.asset.json";
import weddingMusic from "@/assets/wedding-music.mp3.asset.json";
import m2 from "@/assets/memories/m2.webp.asset.json";
import m3 from "@/assets/memories/m3.webp.asset.json";
import m4 from "@/assets/memories/m4.webp.asset.json";
import m5 from "@/assets/memories/m5.webp.asset.json";
import m6 from "@/assets/memories/m6.webp.asset.json";
import m7 from "@/assets/memories/m7.webp.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Swapnika weds Sai Mani Vardhan · 01 July 2026 · Ayyapusetty Family" },
      { name: "description", content: "With the blessings of Lord Ganesha, the Ayyapusetty family solicits your gracious presence at the wedding of Swapnika and Sai Mani Vardhan on Wednesday, 1st July 2026 at Kings Garden Function Hall, Mahaboob Nagar." },
      { property: "og:title", content: "Swapnika weds Sai Mani Vardhan" },
      { property: "og:description", content: "A sacred union — 1st July 2026, Kings Garden Function Hall, Mahaboob Nagar." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  const [entered, setEntered] = useState(false);
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {!entered && <Splash onEnter={() => setEntered(true)} />}
      <Petals />
      <BackgroundMusic />
      <Hero />
      <Invitation />
      <Couple />
      <Story />
      <Muhurtham />
      <Venue
        title="Wedding Venue"
        name="Kings Garden Function Hall"
        address={["Kosigi X-Road,", "Mahaboob Nagar"]}
        mapsQuery="Kings Garden Function Hall Kosigi Mahaboob Nagar"
      />
      <Reception />
      <Venue
        title="Reception Venue"
        name="Somisetty Viswak Garden"
        address={["Sankalbagh,", "Near Sri Chaitanya School,", "Kurnool"]}
        mapsQuery="Somisetty Viswak Garden Sankalbagh Kurnool"
      />
      <Gallery />
      <Blessings />
      <Compliments />
      <Footer />
    </main>
  );
}

/* ---------- Welcome Splash ---------- */

function Splash({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-6 text-center"
      style={{
        backgroundImage: `linear-gradient(rgba(40,8,8,0.85), rgba(40,8,8,0.92)), url(${bgTexture})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.img
        src={ganesha}
        alt="Lord Ganesha"
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-40 md:h-56 w-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 font-script italic text-base md:text-lg tracking-[0.35em] uppercase text-[var(--gold-soft)]"
      >
        Ayyapusetty's
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.9 }}
        className="mt-2 font-display text-3xl md:text-5xl text-[var(--gold)] leading-tight"
      >
        Wedding Invitation
      </motion.h1>
      <Ornament className="mx-auto mt-6 h-8 w-64 opacity-80" />
      <motion.button
        onClick={onEnter}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: [1, 1.06, 1],
        }}
        transition={{
          opacity: { delay: 1.1, duration: 0.5 },
          scale: { delay: 1.1, duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="mt-10 rounded-full gold-border bg-[var(--maroon-deep)] px-10 py-4 text-sm md:text-base font-semibold uppercase tracking-[0.3em] text-[var(--gold-soft)] shadow-gold"
      >
        Tap to Enter
      </motion.button>
    </motion.div>
  );
}

/* ---------- Reusable bits ---------- */

function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="gold-g" x1="0" x2="1">
          <stop offset="0" stopColor="oklch(0.72 0.14 75)" />
          <stop offset="0.5" stopColor="oklch(0.92 0.1 88)" />
          <stop offset="1" stopColor="oklch(0.72 0.14 75)" />
        </linearGradient>
      </defs>
      <g stroke="url(#gold-g)" strokeWidth="1.2" fill="none">
        <line x1="0" y1="20" x2="160" y2="20" />
        <line x1="240" y1="20" x2="400" y2="20" />
        <circle cx="200" cy="20" r="10" />
        <circle cx="200" cy="20" r="4" fill="url(#gold-g)" />
        <path d="M170 20 Q185 5 200 20 Q215 35 230 20" />
        <path d="M170 20 Q185 35 200 20 Q215 5 230 20" />
        <circle cx="160" cy="20" r="2" fill="url(#gold-g)" />
        <circle cx="240" cy="20" r="2" fill="url(#gold-g)" />
      </g>
    </svg>
  );
}

function FadeIn({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="text-center">
      {kicker && (
        <p className="font-script italic text-sm md:text-base tracking-[0.35em] uppercase text-gold-dark">
          {kicker}
        </p>
      )}
      <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display text-gold-dark leading-[1.1]">
        {title}
      </h2>
      <Ornament className="mx-auto mt-6 h-8 w-72" />
    </div>
  );
}


/* ---------- Floating Petals ---------- */

function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return false;

    audio.muted = false;
    audio.volume = 0.65;
    audio.loop = true;

    try {
      await audio.play();
      setPlaying(true);
      setNeedsTap(false);
      return true;
    } catch {
      setPlaying(false);
      setNeedsTap(true);
      return false;
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    let cleanedUp = false;
    const events = ["touchstart", "touchend", "pointerdown", "pointerup", "mousedown", "click", "keydown"] as const;

    const cleanupUnlock = () => {
      if (cleanedUp) return;
      cleanedUp = true;
      events.forEach((eventName) => {
        window.removeEventListener(eventName, unlockMusic, true);
        document.removeEventListener(eventName, unlockMusic, true);
      });
    };

    const primeMutedPlayback = async () => {
      try {
        audio.muted = true;
        audio.volume = 0;
        await audio.play();
        setPlaying(false);
        setNeedsTap(true);
      } catch {
        setNeedsTap(true);
      }
    };

    const unlockMusic = () => {
      void startMusic().then((started) => {
        if (started) cleanupUnlock();
      });
    };

    audio.load();
    void startMusic().then((started) => {
      if (!started) void primeMutedPlayback();
    });

    events.forEach((eventName) => {
      window.addEventListener(eventName, unlockMusic, { capture: true, passive: true });
      document.addEventListener(eventName, unlockMusic, { capture: true, passive: true });
    });

    return () => {
      cleanupUnlock();
    };
  }, [startMusic]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (!playing || audio.paused || audio.muted) {
      void startMusic();
    } else {
      audio.pause();
      audio.muted = false;
      setPlaying(false);
      setNeedsTap(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingMusic.url}
        loop
        autoPlay
        preload="auto"
        playsInline
        onPlay={() => setPlaying(!audioRef.current?.muted)}
        onPause={() => setPlaying(false)}
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className={`fixed bottom-5 right-5 z-[60] flex h-12 items-center justify-center rounded-full gold-border bg-[var(--maroon-deep)]/90 text-[var(--gold-soft)] shadow-gold backdrop-blur transition hover:scale-105 ${needsTap && !playing ? "w-auto gap-2 px-4" : "w-12"}`}
      >
        {playing ? (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        )}
        {needsTap && !playing && <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">Tap music</span>}
        {needsTap && !playing && (
          <span className="pointer-events-none absolute -top-1 -right-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--gold)] opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[var(--gold)]"></span>
          </span>
        )}
      </button>
    </>
  );
}

function Petals() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const petals = Array.from({ length: 22 }, (_, i) => i);
  if (!mounted) return null;
  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden>
      {petals.map((i) => {
        const left = Math.random() * 100;
        const duration = 10 + Math.random() * 14;
        const delay = Math.random() * 12;
        const size = 12 + Math.random() * 18;
        const drift = (Math.random() * 80 - 40).toFixed(0);
        const rot = Math.floor(Math.random() * 360);
        const variant = i % 3;
        return (
          <span
            key={i}
            className="float-petal absolute -top-10"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              ['--drift' as any]: `${drift}px`,
              ['--rot' as any]: `${rot}deg`,
            }}
          >
            <svg viewBox="0 0 24 24" className="h-full w-full" fill="none">
              {variant === 0 ? (
                <path
                  d="M12 2 C16 6 18 10 12 22 C6 10 8 6 12 2 Z"
                  fill="oklch(0.78 0.13 82 / 0.85)"
                  stroke="oklch(0.55 0.16 35 / 0.6)"
                  strokeWidth="0.5"
                />
              ) : variant === 1 ? (
                <g>
                  {[0, 72, 144, 216, 288].map((a) => (
                    <ellipse
                      key={a}
                      cx="12"
                      cy="6"
                      rx="3"
                      ry="5"
                      fill="oklch(0.7 0.18 30 / 0.85)"
                      transform={`rotate(${a} 12 12)`}
                    />
                  ))}
                  <circle cx="12" cy="12" r="2" fill="oklch(0.85 0.14 85)" />
                </g>
              ) : (
                <path
                  d="M12 3 C14 8 14 16 12 21 C10 16 10 8 12 3 Z"
                  fill="oklch(0.85 0.12 85 / 0.9)"
                  stroke="oklch(0.6 0.14 75 / 0.7)"
                  strokeWidth="0.4"
                />
              )}
            </svg>
          </span>
        );
      })}
    </div>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-royal text-[var(--ivory)]"
    >
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgTexture})`, backgroundSize: "cover" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--maroon-deep)]" />

      <motion.div style={{ y, opacity }} className="relative z-10 px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="glow-pulse mx-auto w-56 md:w-72"
        >
          <img src={ganesha} alt="Lord Ganesha" width={1024} height={1024} className="h-auto w-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 font-script italic text-lg md:text-2xl tracking-wider text-[var(--gold-soft)]"
        >
          With the Blessings of Lord Ganesha
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.08em" }}
          transition={{ delay: 0.9, duration: 1.6 }}
          className="mt-4 text-4xl md:text-7xl shimmer"
        >
          Ayyapusetty's
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-3 font-display text-xl md:text-3xl tracking-[0.4em] text-[var(--ivory)]"
        >
          WEDDING INVITATION
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
        >
          <Ornament className="mx-auto mt-8 h-10 w-80" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-10 font-script italic text-base md:text-lg text-[var(--gold-soft)]"
        >
          Swapnika &nbsp;weds&nbsp; Sai Mani Vardhan
        </motion.p>
        <p className="mt-2 font-display text-sm tracking-[0.3em] text-[var(--ivory)]/80">
          01 · 07 · 2026
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--gold-soft)]"
      >
        <div className="flex flex-col items-center gap-2 text-xs tracking-[0.3em]">
          <span>SCROLL</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="block h-8 w-px bg-[var(--gold-soft)]"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- INVITATION (parents) ---------- */

function Invitation() {
  return (
    <section className="relative bg-[var(--cream)] py-28 px-6 md:py-32">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionTitle kicker="Invitation" title="Our Family Invites You" />
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-16 rounded-2xl gold-border bg-[var(--ivory)] p-8 md:p-14 shadow-elegant text-center">
            <p className="font-script italic text-xl md:text-2xl leading-relaxed text-[var(--maroon-deep)]">
              We solicit your gracious presence with family and friends on the auspicious occasion
              of the marriage of our only daughter
            </p>

            <Ornament className="mx-auto my-10 h-6 w-56" />

            <div className="grid gap-10 md:grid-cols-2 text-left">
              <div>
                <p className="font-display text-2xl md:text-3xl text-gold-dark">Mrs. Nama Sarasvathi Devi</p>
                <p className="mt-2 text-base md:text-lg font-body text-[var(--maroon-deep)]/70">M.A., B.Ed.</p>
                <p className="mt-3 text-base md:text-lg font-body text-[var(--maroon-deep)]">S.A. Hindi, Govt. Boys High School,</p>
                <p className="text-base md:text-lg font-body text-[var(--maroon-deep)]">B-Camp, Kurnool</p>
              </div>
              <div>
                <p className="font-display text-2xl md:text-3xl text-gold-dark">Mr. Ayyapusetty Chandra Sekhar</p>
                <p className="mt-2 text-base md:text-lg font-body text-[var(--maroon-deep)]/70">M.Com.</p>
                <p className="mt-3 text-base md:text-lg font-body text-[var(--maroon-deep)]">Sr. Manager (Accounts),</p>
                <p className="text-base md:text-lg font-body text-[var(--maroon-deep)]">TGV SRAAC Ltd., Kurnool</p>
              </div>
            </div>

            <Ornament className="mx-auto my-10 h-6 w-56" />

            <p className="text-base md:text-lg font-body text-[var(--maroon-deep)]/90">
              Flat No. 201, Sameera Cholapuri Apartment,<br />
              Chanikyapuri Colony, A-Camp, Kurnool
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["8919615723", "9542759116", "9490931024"].map((n) => (
                <a
                  key={n}
                  href={`tel:${n}`}
                  className="inline-flex items-center gap-2 rounded-full gold-border bg-[var(--cream)] px-4 py-2.5 text-sm md:text-base text-[var(--maroon-deep)] transition hover:bg-[var(--gold-soft)]/40"
                >
                  <Phone className="h-3.5 w-3.5" /> {n}
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- COUPLE ---------- */

function Couple() {
  return (
    <section className="relative bg-royal py-32 md:py-40 px-5 sm:px-6 text-[var(--ivory)]">
      <div
        className="absolute inset-0 opacity-15 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgTexture})`, backgroundSize: "cover" }}
      />
      <div className="relative mx-auto max-w-5xl">
        <FadeIn>
          <p className="text-center font-script italic tracking-[0.3em] uppercase text-sm text-[var(--gold-soft)]">
            The Couple
          </p>
          <h2 className="mt-4 text-center text-[34px] leading-tight md:text-5xl lg:text-6xl shimmer font-display">
            Two Souls, One Journey
          </h2>
          <Ornament className="mx-auto mt-6 h-8 w-72" />
        </FadeIn>

        <div className="mt-20 space-y-24 md:space-y-32">
          <PersonShowcase
            role="The Bride"
            name="Swapnika"
            photo={bridePhoto.url}
            lines={[
              "Grand Daughter of",
              "Smt. Ayyapusetty Lakshmikanthamma",
              "&",
              "Sri. Ayyapusetty Veeraiah",
            ]}
          />

          <FadeIn>
            <div className="flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="grid h-24 w-24 place-items-center rounded-full border border-[var(--gold-soft)]/50"
              >
                <span className="font-script italic text-4xl text-gold">&amp;</span>
              </motion.div>
            </div>
          </FadeIn>

          <PersonShowcase
            role="The Groom"
            name="Sai Mani Vardhan"
            photo={groomPhoto.url}
            lines={[
              "Second Son of",
              "Smt. Kalwa Vijayalaxmi",
              "&",
              "Late Sri. Kalwa Surya Narayana",
              "Mahaboob Nagar",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function PersonShowcase({
  role,
  name,
  photo,
  lines,
}: {
  role: string;
  name: string;
  photo: string;
  lines: string[];
}) {
  return (
    <FadeIn>
      <div className="flex flex-col items-center text-center">
        <p className="font-script italic uppercase tracking-[0.4em] text-xs sm:text-sm text-[var(--gold-soft)]">
          {role}
        </p>

        {/* Portrait with luxury gold frame + glow */}
        <div className="relative mt-8 w-full max-w-[360px] sm:max-w-[420px] md:max-w-[460px]">
          <div
            className="pointer-events-none absolute -inset-3 rounded-[28px] opacity-70 blur-2xl"
            style={{ background: "radial-gradient(ellipse at center, oklch(0.78 0.13 82 / 0.55), transparent 70%)" }}
            aria-hidden
          />
          <div
            className="relative rounded-[24px] p-[3px]"
            style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
          >
            <div className="rounded-[22px] bg-[var(--maroon-deep)] p-2">
              <img
                src={photo}
                alt={name}
                className="block w-full h-auto rounded-[16px] object-contain"
              />
            </div>
          </div>
        </div>

        <h3
          className="mt-10 shimmer leading-[1.05] font-display"
          style={{
            fontWeight: 600,
            fontSize: "clamp(42px, 9vw, 64px)",
            letterSpacing: "0.02em",
          }}
        >
          {name}
        </h3>

        <Ornament className="mx-auto my-7 h-7 w-60" />

        <div
          className="space-y-2.5 text-[var(--ivory)]/90 font-body"
          style={{ fontSize: "clamp(17px, 4.6vw, 20px)", lineHeight: 1.7 }}
        >
          {lines.map((l, i) => (
            <p
              key={i}
              className={l === "&" ? "font-script italic text-[var(--gold-soft)] text-2xl" : ""}
              style={l === "&" ? { fontFamily: "'Cormorant Garamond', serif" } : undefined}
            >
              {l}
            </p>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

/* ---------- STORY ---------- */

function Story() {
  return (
    <section className="relative bg-[var(--ivory)] py-28 px-6 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <FadeIn>
          <SectionTitle kicker="Our Story" title="A Sacred Union" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <blockquote className="mt-20 font-script italic text-2xl md:text-4xl leading-relaxed text-[var(--maroon-deep)]">
            “Two hearts, two families, and a lifetime of blessings
            <br className="hidden md:block" /> come together in this sacred union.”
          </blockquote>
        </FadeIn>
        <FadeIn delay={0.35}>
          <Sparkles className="mx-auto mt-12 h-6 w-6 text-gold-dark" />
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- MUHURTHAM + COUNTDOWN ---------- */

const WEDDING_DATE = new Date("2026-07-01T07:25:00+05:30");

function useCountdown(target: Date) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);
  const diff = Math.max(0, target.getTime() - (now ?? target).getTime());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function Muhurtham() {
  const t = useCountdown(WEDDING_DATE);
  return (
    <section className="relative bg-royal py-28 md:py-32 px-6 text-[var(--ivory)]">
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgTexture})`, backgroundSize: "cover" }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="font-script italic tracking-[0.3em] uppercase text-xs md:text-sm text-[var(--gold-soft)]">
            Auspicious Hour
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl shimmer font-display">Sumuhurtham</h2>
          <Ornament className="mx-auto mt-4 h-8 w-72" />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-3xl border border-[var(--gold-soft)]/40 bg-[var(--maroon-deep)]/40 p-8 md:p-12 backdrop-blur shadow-royal">
            <Calendar className="mx-auto h-6 w-6 text-[var(--gold-soft)]" />
            <p className="mt-3 font-body text-2xl tracking-[0.3em]">WEDNESDAY</p>
            <p className="mt-2 text-4xl md:text-6xl shimmer font-display">1st July 2026</p>
            <p className="mt-3 font-script italic text-2xl md:text-3xl text-[var(--gold-soft)]">7:25 A.M.</p>

            <div className="mt-10 grid grid-cols-4 gap-2 md:gap-4">
              {[
                { label: "Days", v: t.days },
                { label: "Hours", v: t.hours },
                { label: "Mins", v: t.minutes },
                { label: "Secs", v: t.seconds },
              ].map((u) => (
                <div key={u.label} className="rounded-xl gold-border bg-[var(--burgundy)]/60 px-2 py-4">
                  <div className="text-2xl md:text-4xl shimmer tabular-nums font-display">
                    {String(u.v).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-[10px] md:text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)] font-body">
                    {u.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- VENUE ---------- */

function Venue({
  title,
  name,
  address,
  mapsQuery,
}: {
  title: string;
  name: string;
  address: string[];
  mapsQuery: string;
}) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}&output=embed`;
  const navUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`;
  return (
    <section className="relative bg-[var(--cream)] py-28 px-6 md:py-32">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <SectionTitle kicker="Venue" title={title} />
        </FadeIn>
        <FadeIn delay={0.15}>
          <div className="mt-16 grid gap-8 rounded-2xl gold-border bg-[var(--ivory)] p-6 md:p-10 shadow-elegant md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <MapPin className="h-6 w-6 text-gold-dark" />
              <h3 className="mt-4 text-3xl md:text-4xl font-display text-gold-dark leading-tight">{name}</h3>
              <div className="mt-5 space-y-2 text-base md:text-lg font-body text-[var(--maroon-deep)]/90">
                {address.map((a) => <p key={a}>{a}</p>)}
              </div>
              <a
                href={navUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold-dark px-6 py-3 text-sm tracking-[0.2em] uppercase text-[var(--ivory)] shadow-gold transition hover:bg-[#8a5a1b]"
              >
                <MapPin className="h-4 w-4" /> Tap to Navigate
              </a>
            </div>
            <div className="overflow-hidden rounded-xl gold-border aspect-square md:aspect-auto md:min-h-[280px]">
              <iframe
                title={`${name} map`}
                src={mapSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- RECEPTION ---------- */

function Reception() {
  return (
    <section className="relative bg-royal py-28 md:py-32 px-6 text-[var(--ivory)]">
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgTexture})`, backgroundSize: "cover" }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <p className="font-script italic tracking-[0.3em] uppercase text-xs md:text-sm text-[var(--gold-soft)]">
            Celebration
          </p>
          <h2 className="mt-3 text-4xl md:text-6xl shimmer font-display">Reception</h2>
          <Ornament className="mx-auto mt-4 h-8 w-72" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-12 rounded-3xl border border-[var(--gold-soft)]/40 bg-[var(--maroon-deep)]/40 p-8 md:p-12 backdrop-blur shadow-royal">
            <p className="font-body text-2xl tracking-[0.3em]">SUNDAY</p>
            <p className="mt-2 text-4xl md:text-5xl shimmer font-display">5th July 2026</p>
            <p className="mt-3 font-script italic text-2xl md:text-3xl text-[var(--gold-soft)]">11:00 A.M.</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ---------- GALLERY ---------- */

function Gallery() {
  const photos = [
    { src: m6.url, alt: "Swapnika & Sai Mani Vardhan" },
    { src: m7.url, alt: "Engagement Moments" },
    { src: m2.url, alt: "Groom — Sai Mani Vardhan" },
    { src: m3.url, alt: "New Beginnings" },
    { src: m4.url, alt: "A True Love Story Never Ends" },
    { src: m5.url, alt: "Bride — Swapnika" },
  ];
  return (
    <section className="relative bg-[var(--ivory)] py-28 px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionTitle kicker="Memories" title="Moments to Cherish" />
        </FadeIn>
        <div className="mt-16 columns-1 gap-4 sm:columns-2 md:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {photos.map((p, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative overflow-hidden rounded-xl gold-border shadow-elegant bg-[var(--ivory)]"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="block w-full h-auto"
                />
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BLESSINGS ---------- */

function Blessings() {
  return (
    <section className="relative bg-royal py-28 px-6 text-[var(--ivory)] overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 mix-blend-overlay"
        style={{ backgroundImage: `url(${bgTexture})`, backgroundSize: "cover" }}
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <FadeIn>
          <div className="mx-auto flex justify-center gap-6">
            {[0, 1, 2].map((i) => <Diya key={i} delay={i * 0.3} />)}
          </div>
          <p className="mt-10 font-script italic text-2xl md:text-3xl leading-relaxed text-[var(--gold-soft)]">
            “Your presence and blessings will make this celebration complete.”
          </p>
          <Ornament className="mx-auto mt-8 h-8 w-72" />
        </FadeIn>
      </div>
    </section>
  );
}

function Diya({ delay = 0 }: { delay?: number }) {
  return (
    <div className="flex flex-col items-center" style={{ animationDelay: `${delay}s` }}>
      <div className="flicker h-8 w-3 rounded-t-full bg-gradient-to-t from-[oklch(0.85_0.18_55)] via-[oklch(0.92_0.18_75)] to-transparent shadow-[0_0_24px_oklch(0.85_0.18_55/0.9)]" />
      <div className="h-3 w-10 rounded-b-full bg-gradient-to-b from-[var(--gold)] to-[var(--gold-deep)] shadow-gold" />
    </div>
  );
}

/* ---------- COMPLIMENTS ---------- */

function Compliments() {
  return (
    <section className="bg-[var(--cream)] py-20 px-6 text-center">
      <FadeIn>
        <Ornament className="mx-auto h-8 w-72" />
        <p className="mt-6 font-script italic text-xl md:text-2xl text-[var(--maroon)]">
          With Best Compliments From Near &amp; Dear
        </p>
        <Ornament className="mx-auto mt-6 h-8 w-72" />
      </FadeIn>
    </section>
  );
}

/* ---------- FOOTER ---------- */

function Footer() {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const share = async () => {
    const data = {
      title: "Swapnika weds Sai Mani Vardhan",
      text: "Join us on 1st July 2026 at Kings Garden Function Hall, Mahaboob Nagar.",
      url: shareUrl,
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(data.url);
        alert("Link copied to clipboard");
      }
    } catch {}
  };

  return (
    <footer className="bg-royal py-20 px-6 text-center text-[var(--ivory)]">
      <Ornament className="mx-auto h-10 w-80" />
      <h3 className="mt-6 font-display text-3xl md:text-4xl shimmer">Ayyapusetty Family</h3>
      <p className="mt-4 font-script italic text-lg text-[var(--gold-soft)]">
        Thank You For Being Part Of Our Celebration
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button
          onClick={share}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-soft)]/50 px-5 py-2 text-xs uppercase tracking-[0.3em] text-[var(--ivory)] transition hover:bg-[var(--gold-soft)]/20"
        >
          <Share2 className="h-4 w-4" /> Share
        </button>
        <a
          href={`https://wa.me/?text=${encodeURIComponent("Swapnika weds Sai Mani Vardhan — 1st July 2026")}%20${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[var(--gold-soft)]/50 px-5 py-2 text-xs uppercase tracking-[0.3em] transition hover:bg-[var(--gold-soft)]/20"
        >
          WhatsApp
        </a>
      </div>

      <div className="mt-10 border-t border-[var(--gold-soft)]/20 pt-10">
        <p className="font-display text-xl tracking-[0.15em] text-[var(--gold-soft)]">
          PASSION PHOTOGRAPHY
        </p>
        <p className="mt-2 text-sm text-[var(--ivory)]/80">+91 9959990503</p>
        <p className="mt-1 text-sm text-[var(--ivory)]/80">Passionphotography7878@gmail.com</p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.instagram.com/passionphotography_in_kurnool"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-soft)]/50 px-5 py-2 text-xs uppercase tracking-[0.3em] text-[var(--ivory)] transition hover:bg-[var(--gold-soft)]/20"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@PassionPhotographyy"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--gold-soft)]/50 px-5 py-2 text-xs uppercase tracking-[0.3em] text-[var(--ivory)] transition hover:bg-[var(--gold-soft)]/20"
          >
            YouTube
          </a>
        </div>
      </div>

      <Ornament className="mx-auto mt-10 h-8 w-72" />
      <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--ivory)]/60">
        Swapnika &amp; Sai Mani Vardhan · 01 · 07 · 2026
      </p>
    </footer>
  );
}
