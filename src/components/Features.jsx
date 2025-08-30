import React from 'react';
import { Zap, Settings, Shield, BarChart3, Clock, Users } from 'lucide-react';

const features = [
  {
    title: 'AI content generation',
    desc: 'Draft tweets and multi-post threads with your voice and examples.',
    icon: Zap,
    color: 'from-sky-500 to-blue-600',
  },
  {
    title: 'Smart scheduling',
    desc: 'Automatically selects peak engagement times for your audience.',
    icon: Clock,
    color: 'from-violet-500 to-fuchsia-600',
  },
  {
    title: 'Workflow automations',
    desc: 'Create if-this-then-that flows for replies, DMs, and follows.',
    icon: Settings,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Analytics that matter',
    desc: 'Track growth, CTR, and conversions with clean visual insights.',
    icon: BarChart3,
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Team collaboration',
    desc: 'Invite teammates, set approvals, and manage brand voice.',
    icon: Users,
    color: 'from-pink-500 to-rose-600',
  },
  {
    title: 'Account safety',
    desc: 'Rate limits, human-like pacing, and secure OAuth—built-in.',
    icon: Shield,
    color: 'from-lime-500 to-green-600',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(99,102,241,0.10),rgba(0,0,0,0))]" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to grow on Twitter</h2>
          <p className="mt-3 text-neutral-300">Design your growth engine: plan content, automate engagement, and measure impact—without context switching.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-transform hover:-translate-y-0.5">
              <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${f.color} text-white shadow-lg shadow-black/20`}>
                <f.icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
