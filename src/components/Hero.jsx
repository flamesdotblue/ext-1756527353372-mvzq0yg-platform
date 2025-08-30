import React from 'react';
import { Zap, BarChart3, Clock } from 'lucide-react';

const Stat = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
    <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
      <Icon className="text-sky-400" size={18} />
    </div>
    <div>
      <div className="text-xs text-neutral-400">{label}</div>
      <div className="text-sm font-semibold">{value}</div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(56,189,248,0.20),rgba(0,0,0,0))]" />
      <div className="max-w-6xl mx-auto px-4 pt-16 md:pt-24 pb-10">
        <div className="grid md:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-xs text-sky-200 mb-5">
              <span className="inline-flex h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
              New: AI thread writer and auto-replies
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Automate your Twitter growth with precision
            </h1>
            <p className="mt-4 text-lg text-neutral-300">
              TweetPilot schedules, writes, and optimizes your tweets, threads, and DMs so you can grow faster—on autopilot.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex h-11 items-center rounded-md bg-gradient-to-r from-sky-500 to-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-shadow">
                Start free
              </a>
              <a href="#features" className="inline-flex h-11 items-center rounded-md border border-white/10 bg-white/5 px-6 text-sm font-medium text-white/90 hover:bg-white/10 transition-colors">
                See features
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
              <Stat icon={Zap} label="Time saved" value="8+ hrs/week" />
              <Stat icon={BarChart3} label="Avg. growth" value="2.3x faster" />
              <Stat icon={Clock} label="Best send" value="Auto-optimized" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl">
              <div className="rounded-xl border border-white/10 bg-neutral-900/80 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500" />
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs text-neutral-400">Automation preview</div>
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                    <div>
                      <div className="font-medium">AI thread writer</div>
                      <div className="text-neutral-400">Generate 7-post thread on chosen topic</div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                    <div>
                      <div className="font-medium">Smart scheduler</div>
                      <div className="text-neutral-400">Queues at best time for your audience</div>
                    </div>
                    <div className="text-xs text-emerald-300">Optimized</div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
                    <div>
                      <div className="font-medium">Auto-reply</div>
                      <div className="text-neutral-400">Engage replies with on-brand tone</div>
                    </div>
                    <div className="text-xs text-sky-300">Live</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-neutral-950/60 p-3">
                    <div className="text-xs text-neutral-400 mb-2">Upcoming posts</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Thread: Growth lessons from 0 → 10k</span>
                        <span className="text-neutral-400">Tomorrow, 9:30 AM</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span>Tweet: Ship daily, even tiny things</span>
                        <span className="text-neutral-400">Thu, 1:00 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
